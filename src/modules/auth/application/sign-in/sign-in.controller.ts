import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInRequestBody } from './sign-in-request.body';
import { SignInHandler } from './sign-in.handler';

@ApiTags('Auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class SignInController {
  constructor(private readonly signUpHandler: SignInHandler) {}
  @Post('/login')
  signUp(@Body() body: SignInRequestBody) {
    return this.signUpHandler.execute(body);
  }
}
