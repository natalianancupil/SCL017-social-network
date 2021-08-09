// import firebaseLoginFunctions from '../firebaseLogin.js';

import functionsPost from '../fireStorePost.js';

export const feed = () => {
  const containerViewFeed = document.createElement('div');

  const viewFeed = `<div class="feed">
  <nav>
  <header>
      <h1 class="womanbike">WOMANBIKE</H1>
  </header>
      <div class="iconsNav">
        <button class="searchIcon" id="searchIcon">
           <span class="iconify" data-inline="false" data-icon="ion:search-circle"></span>
        </button> 
        <button class="homeIcon" id="homeIcon">
           <span class="iconify" data-inline="false" data-icon="bx:bxs-home-heart"></span>
        </button>
        <button class="profileIcon" id="profileIcon">
           <span class="iconify" data-inline="false" data-icon="carbon:user-avatar-filled"></span>
        </button> 
        <button class="menuIcon" id="menuIcon">
           <span class="iconify" data-inline="false" data-icon="entypo:menu"></span>
        </button> 
      </div>
  </nav>
  <main>
    <div class="postUserContainer">
      <div class="user">
        <img class="imgUser" src="" alt="FotoPerfilUsuaria">
        <div class="nameUser"></div>
      </div>
      <textarea class="inputPost" id="inputPost" placeholder="Escribe tu comentario aquí..." cols="30" rows="10"></textarea>
      <button class="buttonPost" id="buttonPost">Comentar</button>
    </div>
  </main>      
</div>`;
  containerViewFeed.innerHTML = viewFeed;

  //   window.addEventListener("load", () => {
  //     firebaseLoginFunctions.showUser;
  //   });
  const buttonPost = containerViewFeed.querySelector('#buttonPost');

  buttonPost.addEventListener('click', functionsPost.savePost);
  return containerViewFeed;
};
