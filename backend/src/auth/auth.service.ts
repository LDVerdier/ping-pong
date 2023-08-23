import { Inject, Injectable } from '@nestjs/common';
import { EncryptionProvider, Users } from '../user/user.service';
import { UserWithoutPassword, userMapper } from '../app.controller';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(Users)
    private users: Users,
    @Inject(EncryptionProvider)
    private encryptionProvider: EncryptionProvider,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    plainPassword: string,
  ): Promise<UserWithoutPassword | null> {
    const user = await this.users.findByEmail(email);

    if (
      user &&
      (await this.encryptionProvider.compare(plainPassword, user.password))
    ) {
      return userMapper(user);
    }

    return null;
  }

  async login(user: UserWithoutPassword) {
    const payload = { email: user.email, sub: user.id };

    return {
      acces_token: this.jwtService.sign(payload),
    };
  }
}
