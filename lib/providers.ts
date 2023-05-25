import { Provider } from '@nestjs/common';
import { IPEAKOIN_MANAGER, IPEAKOIN_MODULE_OPTIONS } from './constants';
import { ModuleOptions } from './interface';
import { loadPackage } from './util';

/**
 * Creates a Manager Provider.
 *
 * @publicApi
 */
export function createManager(name?: string): Provider {
  return {
    provide: name || IPEAKOIN_MANAGER,
    useFactory: (options: ModuleOptions) => {
      const Manager = loadPackage('@ipeakoin/ipeakoin-sdk', 'ClientModule', () => require('@ipeakoin/ipeakoin-sdk'));
      if (options?.baseUrl) return new Manager(options.clientId, options.clientSecret, options.baseUrl);
      return new Manager(options.clientId, options.clientSecret);
    },
    inject: [IPEAKOIN_MODULE_OPTIONS],
  };
}
