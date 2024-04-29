import {
  Controller,
  Headers,
  HttpStatus,
  Logger,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Headers() headers: Record<string, string>,
    @Res() res: Response,
  ) {
    const accessToken = headers.authorization.replace('Bearer', '');
    try {
      const verifiedToken = await this.authService.verifyUser(accessToken);
      const { sessionCookie, expiresIn } =
        await this.authService.createCookie(accessToken);

      return res
        .cookie('session', sessionCookie, {
          maxAge: expiresIn,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        })
        .status(HttpStatus.OK)
        .json(verifiedToken);
    } catch (error) {
      console.error('Login error:', error);
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: 'Invalid credentials' });
    }
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    try {
      await this.authService.revokeToken(req.cookies.session);
      res.clearCookie('session');
      return {
        status: HttpStatus.OK,
        body: null,
      };
    } catch (error) {
      console.error('Logout error:', error);
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Error Happened' });
    }
  }
}
