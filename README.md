<p style="text-align: center;">
  <h1 align="center"><a href="javascript:void(0);">nestjs-ipeakoin-sdk</a></h1>
</p>

## Install

`npm install @ipeakoin/ipeakoin-sdk --save`
`npm install @ipeakoin/nestjs-ipeakoin-sdk --save`

## Register

```js
import { ClientModule } from '@ipeakoin/nestjs-ipeakoin-sdk';

@Module({
  imports: [
    ClientModule.registerAsync({
      useFactory: async () => {
        return {
          clientId: '<your-client-id>',
          clientSecret: '<your-client-secret>',
          baseUrl: 'https://api-sandbox.ipeakoin.com', // 可选 默认正式环境
        };
      },
    }),
  ],
})
export class AppModule {}

// Or dynamic configuration useFactory: async (configService: ConfigService)
```

## Interactive

`import Client from '@ipeakoin/ipeakoin-sdk';`
`import { IPEAKOIN_MANAGER } from '@ipeakoin/nestjs-ipeakoin-sdk';`

`constructor(@Inject(IPEAKOIN_MANAGER) private client: Client) {}`

## Start Using

`const res = await this.client.getCode();`
