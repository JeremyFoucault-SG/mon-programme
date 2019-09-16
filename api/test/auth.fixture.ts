import * as faker from 'faker/locale/fr';
import { AuthDTO } from 'src/api/auth/auth.dto';
import { AuthController } from 'src/api/auth/auth.controller';
import { RegisterDTO } from 'src/api/auth/register.dto';

export async function insertAuthData(authController: AuthController) {
  // populate mongo
  const auth: RegisterDTO = {
    username: 'admin',
    password: 'admin123',
    age: "sdfsdfsdfdsf",
    email: "fsdfsdf",
    firstname: "sdfsdfsf",
    lastname: "fsdfsf",
    objectif: "Raffermissement",
    size: "sdfsfs",
    weight: "sfsdfsf",
  };

  await authController.signup(auth);
}
