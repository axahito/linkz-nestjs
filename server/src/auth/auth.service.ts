import { Injectable, Logger } from '@nestjs/common';
import { admin } from './firebase-admin.module';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor() {}

  public async verifyUser(accessToken: string) {
    const verifiedToken = await admin.auth().verifyIdToken(accessToken);

    return verifiedToken;
  }

  public async createCookie(accessToken: string) {
    const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
    const sessionCookie = await admin.auth().createSessionCookie(accessToken, {
      expiresIn: expiresIn,
    });

    return { sessionCookie, expiresIn };
  }

  public async revokeToken(sessionCookie: string) {
    const decodedClaims = await admin.auth().verifySessionCookie(sessionCookie);
    await admin.auth().revokeRefreshTokens(decodedClaims.sub);

    return true;
  }
}
