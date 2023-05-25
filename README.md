<p style="text-align: center;">
  <h1 align="center"><a href="javascript:void(0);">nestjs-ipeakoin-sdk</a></h1>
</p>

## 安装

`npm install @ipeakoin/ipeakoin-sdk --save`
`npm install @ipeakoin/nestjs-ipeakoin-sdk --save`

## 注册

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

// 或者动态配置 useFactory: async (configService: ConfigService)
```

## 交互

`import Client from '@ipeakoin/ipeakoin-sdk';`
`import { IPEAKOIN_MANAGER } from '@ipeakoin/nestjs-ipeakoin-sdk';`

`constructor(@Inject(IPEAKOIN_MANAGER) private client: Client) {}`

## 使用

`const res = await this.client.getAccessToken();`
