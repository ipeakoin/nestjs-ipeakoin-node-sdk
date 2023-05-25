import { ModuleMetadata, Provider, Type } from '@nestjs/common';

export interface ModuleOptions {
  clientId: string;
  clientSecret: string;
  baseUrl?: string;
}

/**
 * Interface describing a `OptionsFactory`.  Providers supplying configuration
 * options for the module must implement this interface.
 * @publicApi
 */
export interface OptionsFactory {
  createOptions(): Promise<ModuleOptions> | ModuleOptions;
}

/**
 * Options for dynamically configuring the module.
 * @publicApi
 */
export interface ModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  name?: string;
  /**
   * Injection token resolving to an existing provider. The provider must implement
   * the `OptionsFactory` interface.
   */
  useExisting?: Type<OptionsFactory>;
  /**
   * Injection token resolving to a class that will be instantiated as a provider.
   * The class must implement the `OptionsFactory` interface.
   */
  useClass?: Type<OptionsFactory>;
  /**
   * Function returning options (or a Promise resolving to options) to configure the
   * cache module.
   */
  useFactory?: (...args: any[]) => Promise<ModuleOptions> | ModuleOptions;
  /**
   * Dependencies that a Factory may inject.
   */
  inject?: any[];
  extraProviders?: Provider[];
}
