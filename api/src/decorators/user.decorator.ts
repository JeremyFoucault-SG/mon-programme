
import { createParamDecorator } from '@nestjs/common';

// tslint:disable-next-line: variable-name

export interface UserJWTPayload {
  readonly id: string;
  readonly username: string;
  readonly userId: string;
}
export const User = createParamDecorator((data, req) => {
  return data ? req.user && req.user[data] : req.user;
});
