import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SaltBcrypt } from '../../../common/auth.common';

@Injectable()
export class BcryptService {
  constructor() {}

  public hashPassword(plainPassword: string) {
    return bcrypt.hash(plainPassword, SaltBcrypt);
  }

  public comparePassword(password: string, hashPassword: string) {
    return bcrypt.compare(password, hashPassword);
  }
}
