import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import firebase from './firebase.config';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Res() res: Response) {
    // Implement login logic using Firebase Auth (replace with your actual logic)
    const email = 'user@example.com'; // Replace with user-provided email
    const password = 'password123'; // Replace with user-provided password

    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const user = response.user; // Assuming successful login

      // Generate a secure random string for the HttpOnly cookie
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      // Set HttpOnly cookie with the token (customize expiry as needed)
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60,
      }); // 1 hour

      return { message: 'Login successful', user }; // You might return a more specific response
    } catch (error) {
      console.error('Login error:', error);
      return res.status(403).json({ message: 'Invalid credentials' });
    }
  }

  @Post('register')
  async register(@Res() res: Response) {
    // Implement login logic using Firebase Auth (replace with your actual logic)
    const email = 'user@example.com'; // Replace with user-provided email
    const password = 'password123'; // Replace with user-provided password

    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = response.user; // Assuming successful registration

      // Generate a secure random string for the HttpOnly cookie
      const token =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      // Set HttpOnly cookie with the token (customize expiry as needed)
      res.cookie('access_token', token, {
        httpOnly: true,
        secure: true,
        maxAge: 1000 * 60 * 60,
      }); // 1 hour

      return { message: 'Login successful', user }; // You might return a more specific response
    } catch (error) {
      console.error('Login error:', error);
      return res.status(403).json({ message: 'Invalid credentials' });
    }
  }
}
