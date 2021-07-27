export const signIn = () => {
  const divContainerSignIn = document.createElement('div');

  const viewSignIn = `<div class="containerLogin">
                            <div class="logo">
                                <img src="img/logoBike.png" alt="logo de la aplicación">
                            </div>
                            <div class="formSignIn">
                                <input type="email" class="inputSignIn" id="inputEmail" placeholder="Email">
                                <input type="password" class="inputSignIn" id="inputPass" placeholder="Contraseña">
                                <p class=passwordRecover>Recuperar Contraseña</p>
                                <button class="enterButton" id="enterButton">Ingresar</button>
                            </div>
                            <div class="socialNetworkButton">
                                <p>Iniciar sesión con:</p>
                                <div class="icons">
                                <span class="iconify" id="googleButton" data-inline="false" data-icon="flat-color-icons:google" style="font-size: 35px;"></span>
                                </div>
                            </div>
                         </div>`;
  divContainerSignIn.innerHTML = viewSignIn;

  return divContainerSignIn;
};
