import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth.service';

describe('Auth Service', () => {
  const userInfo = { username: 'eren', password: '123' };
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule,
        PassportModule,
        JwtModule.register({
          secret: 'jwtConstants.secret',
          signOptions: { expiresIn: '60s' },
        }),
      ],
      providers: [AuthService, ConfigService],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('GetAll', () => {
    it('should return true', async () => {
      const result = await service.validateUser(
        userInfo.username,
        userInfo.password,
      );
      expect(result).toEqual(true);
    });
  });
});
