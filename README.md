# nest-qbit

## 安装

`npm install qbit-node-sdk`
`npm install nest-qbit`

## 注册

```js
import { QbitModule } from 'nest-qbit';

@Module({
  imports: [
    QbitModule.registerAsync({
      useFactory: async () => {
        return {
          clientId: '<clientId>',
          clientSecret: '<clientSecret>',
          baseUrl: 'https://global.service.staging.qbitnetwork.com', // 可选 默认正式环境
        };
      },
    }),
  ],
})
export class AppModule {}

// 或者动态配置 useFactory: async (configService: ConfigService)
```

## 交互

`import Qbit from 'qbit-node-sdk';`
`import { QBIT_MANAGER } from 'nest-qbit';`

`constructor(@Inject(QBIT_MANAGER) private qbit: Qbit) {}`

## 使用

`const res = await this.qbit.getAccessToken();`
