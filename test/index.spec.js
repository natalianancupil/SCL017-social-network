// importamos la funcion que vamos a testear
import { login } from '../src/login.js';

describe('login', () => {
  it('deberia ser codigo html', () => {
    const viewLogin = login();
    expect(viewLogin instanceof HTMLElement).toBe(true);
  });
});
