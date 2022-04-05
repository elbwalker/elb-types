import { WebDestination } from '@elbwalker/types/types/destinations';
import { AnyObject } from './globals';
import { Walker } from './walker';

export declare namespace Elbwalker {
  interface Function {
    go: (config?: Config) => void;
    push: (
      event?: string,
      data?: PushData,
      trigger?: string,
      nested?: Walker.Entities,
    ) => void;
  }

  type ElbLayer = [string?, Elbwalker.PushData?, string?, Walker.Entities?];
  type PushData = AnyObject | WebDestination.Function;

  interface Config {
    custom?: boolean;
    projectId?: string;
  }

  type Events = Event[];
  interface Event {
    event: string;
    data: AnyObject;
    globals: AnyObject;
    user: User;
    nested: Walker.Entities;
    id: string;
    trigger: string;
    entity: string;
    action: string;
    timestamp: number;
    timing: number;
    group: string;
    count: number;
    // @TODO version: number;
  }

  interface User {
    id?: string;
    device?: string;
    hash?: string;
  }

  const enum Commands {
    Action = 'action',
    Config = 'config',
    Consent = 'consent',
    Destination = 'destination',
    Globals = 'globals',
    Run = 'run',
    User = 'user',
    Walker = 'walker',
  }
}
