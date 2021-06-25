import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'eren' && password === '123') {
      return true;
    }
    return false;
  }
}
