import { Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export type SiteLang = 'pt-BR' | 'en' | 'es';

const STORAGE_KEY = 'eranitor-lang';

type Dict = Record<string, string>;

const loaders: Record<SiteLang, () => Promise<{ default: Dict }>> = {
  'pt-BR': () => import('../i18n/pt-BR.json'),
  en: () => import('../i18n/en.json'),
  es: () => import('../i18n/es.json'),
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<SiteLang>('pt-BR');
  readonly announcement = signal('');
  private cache: Partial<Record<SiteLang, Dict>> = {};
  private fallback: Dict = {};
  private current: Dict = {};

  constructor(private title: Title, private meta: Meta) {}

  async init(path: string): Promise<void> {
    const stored = this.readStored();
    const detected = this.detect();
    const initial = stored ?? detected;
    await this.setLang(initial, path, false);
  }

  async setLang(next: SiteLang, path?: string, persist = true): Promise<void> {
    const dict = await this.load(next);
    this.lang.set(next);
    this.current = dict;
    document.documentElement.setAttribute('lang', next);
    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        return;
      }
    }
    this.announcement.set(dict['settings.announce'] ?? '');
    this.updateSeo(path ?? window.location.pathname);
  }

  t(key: string): string {
    return this.current[key] ?? this.fallback[key] ?? key;
  }

  updateSeo(path: string): void {
    const clean = path.split('?')[0].split('#')[0];
    const section =
      clean === '/' || clean === '' ? 'home' : clean.replace(/^\//, '').replace(/\/$/, '');
    const map: Record<string, string> = {
      'sobre-nos': 'about',
      contato: 'contact',
      baixar: 'download',
    };
    const name = map[section] ?? (section === 'home' ? 'home' : 'home');
    const title = this.t(`meta.${name}.title`);
    const desc = this.t(`meta.${name}.description`);
    if (title && title !== `meta.${name}.title`) this.title.setTitle(title);
    if (desc && desc !== `meta.${name}.description`) {
      this.meta.updateTag({ name: 'description', content: desc });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: desc });
    }
  }

  private async load(lang: SiteLang): Promise<Dict> {
    if (!this.cache[lang]) {
      const mod = await loaders[lang]();
      this.cache[lang] = mod.default;
    }
    if (lang === 'pt-BR' || Object.keys(this.fallback).length === 0) {
      const base = await loaders['pt-BR']();
      this.cache['pt-BR'] = base.default;
      this.fallback = base.default;
    }
    return this.cache[lang] as Dict;
  }

  private detect(): SiteLang {
    const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
    if (nav.startsWith('en')) return 'en';
    if (nav.startsWith('es')) return 'es';
    return 'pt-BR';
  }

  private readStored(): SiteLang | null {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw === 'en' || raw === 'es' || raw === 'pt-BR') return raw;
      return null;
    } catch {
      return null;
    }
  }
}
