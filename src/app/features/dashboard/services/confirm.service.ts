import { Injectable, signal } from '@angular/core';

export interface ConfirmRequest {
  title: string;
  message: string;
  confirmLabel: string;
  resolve: (ok: boolean) => void;
}

@Injectable({ providedIn: 'root' })
export class ConfirmService {
  readonly current = signal<ConfirmRequest | null>(null);

  ask(title: string, message: string, confirmLabel = 'Excluir'): Promise<boolean> {
    this.current()?.resolve(false);
    return new Promise((resolve) => this.current.set({ title, message, confirmLabel, resolve }));
  }

  answer(ok: boolean): void {
    const request = this.current();
    if (!request) return;
    this.current.set(null);
    request.resolve(ok);
  }
}
