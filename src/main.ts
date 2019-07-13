import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// import * as historyApiFallback from 'connect-history-api-fallback';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, './public'));
  // app.use(historyApiFallback());
  await app.listen(3000);
}
bootstrap();
