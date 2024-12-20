import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class SignInRequestBody {
  @ApiProperty({
    description: 'Email',
    example: 'tddat.work@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234',
  })
  @IsStrongPassword()
  password: string;
}
