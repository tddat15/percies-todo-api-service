import { SignInRequestBody } from './sign-in-request.body';
import { PrismaService } from '../../../../databases/services';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { BcryptService } from '../../service';

@Injectable()
export class SignInHandler {
  constructor(
    private readonly dbContext: PrismaService,
    private readonly bcryptService: BcryptService,
  ) {}

  public async execute(options: SignInRequestBody) {
    const { email, password } = options;

    const user = await this.dbContext.user.findFirst({
      where: {
        email,
      },
      select: {
        password: true,
      },
    });

    const { password: hashPassword } = user;
    //Check email in dbs
    if (!user) {
      throw new BadRequestException('Email is not registered!');
    }

    //Check match password
    const matchPassword = this.bcryptService.comparePassword(
      hashPassword,
      password,
    );

    if (!matchPassword)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Password is incorrect!',
        },
        HttpStatus.BAD_REQUEST,
      );
    //Create access token and refresh token and save db

    //generate tokens
    //get data return login
    return true;
  }
}
