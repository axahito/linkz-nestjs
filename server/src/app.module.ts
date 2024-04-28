import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CookieParserMiddleware } from './middlewares/cookie-parser.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CookieParserMiddleware],
})
export class AppModule {}
