import { ApiProperty } from '@nestjs/swagger';

export class SignInRequestBody {
  @ApiProperty({
    description: 'access token',
  })
  accessToken: string;

  @ApiProperty({
    description: 'refresh token',
    example: 'Abcd@1234',
  })
  refreshToken: string;
}
