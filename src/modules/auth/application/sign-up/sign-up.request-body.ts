import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class SignUpRequestBody {
  @ApiProperty({
    description: 'Email',
    example: 'tddat.work@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'First name of user',
    example: 'Dat',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Thai',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Password',
    example: 'Abcd@1234',
  })
  @IsStrongPassword()
  password: string;
}
