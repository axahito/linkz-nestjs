import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as cookieParser from 'cookie-parser';

@Injectable()
export class CookieParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    cookieParser()(req, res, next); // Use cookieParser middleware
  }
}
