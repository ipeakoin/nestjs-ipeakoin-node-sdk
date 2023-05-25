import { DynamicModule, Module, Provider } from '@nestjs/common';
import { IPEAKOIN_MANAGER, IPEAKOIN_MODULE_OPTIONS } from './constants';
import { ModuleAsyncOptions, OptionsFactory } from './interface';
import { createManager } from './providers';

@Module({})
export class ClientModule {
  static registerAsync(options: ModuleAsyncOptions): DynamicModule {
    return {
      module: ClientModule,
      imports: options.imports,
      providers: [...this.createAsyncProviders(options), ...(options.extraProviders || [])],
      exports: [options?.name || IPEAKOIN_MANAGER],
    };
  }

  private static createAsyncProviders(options: ModuleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options), createManager(options.name)];
    }
    if (options.useClass) {
      return [
        this.createAsyncOptionsProvider(options),
        {
          provide: options.useClass,
          useClass: options.useClass,
        },
        createManager(options.name),
      ];
    }
    return [];
  }

  private static createAsyncOptionsProvider(options: ModuleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: IPEAKOIN_MODULE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }
    return {
      provide: IPEAKOIN_MODULE_OPTIONS,
      useFactory: async (optionsFactory: OptionsFactory) => optionsFactory.createOptions(),
      inject: [options?.useExisting || options?.useClass || ''],
    };
  }
}
