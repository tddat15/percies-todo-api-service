import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignUpRequestBody } from './sign-up.request-body';
import { SignUpHandler } from './sign-up.handler';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class SignUpController {
  constructor(private readonly signUpHandler: SignUpHandler) {}
  @Post('/register')
  signUp(@Body() body: SignUpRequestBody) {
    return this.signUpHandler.execute(body);
  }
}
