import * as faker from 'faker/locale/fr';
import { AuthDTO } from 'src/api/auth/auth.dto';
import { AuthController } from 'src/api/auth/auth.controller';

export async function insertAuthData(authController: AuthController) {
  // populate mongo
    const auth: AuthDTO = {
        username: 'admin',
        password: 'admin123',
    };

    await authController.signup(auth);
}
