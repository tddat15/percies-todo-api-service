import { SignUpRequestBody } from './sign-up.request-body';
import { PrismaService } from '../../../../databases/services';
import { BadRequestException, Injectable } from '@nestjs/common';
import { BcryptService } from '../../service';

@Injectable()
export class SignUpHandler {
  constructor(
    private readonly dbContext: PrismaService,
    private readonly bcryptService: BcryptService,
  ) {}

  public async execute(options: SignUpRequestBody) {
    const { firstName, lastName, email, password } = options;

    const isExistedUser = await this.dbContext.user.findFirst({
      where: {
        email,
      },
    });

    if (isExistedUser) {
      throw new BadRequestException('This email already register');
    }

    const hashPassword = await this.bcryptService.hashPassword(password);

    await this.dbContext.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashPassword,
      },
    });

    return true;
  }
}
