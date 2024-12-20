import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class CryptoService {
  constructor() {}

  public createPrivateKey() {
    return crypto.randomBytes(64).toString('hex');
  }
}
