import { Elbwalker } from './elbwalker';

declare global {
  interface Window {
    elbwalker: Elbwalker.Function;
    elbLayer: Elbwalker.ElbLayer;
    dataLayer?: unknown[];
  }
}

export type AnyObject = Record<string, unknown>;
