const grid = document.querySelector('.grid');


const characters = [
   'img1',
   'rick',
   'teste',
   'pp',
   'rickmort',
   'the word',
  
   
 ];
 
 const createElement = (tag, className) => {
   const element = document.createElement(tag);
   element.className = className;
   return element;
 }

 let primCard = '';
 let segCard = '';

  const checkEndGame = () => {

    const acerT = document.querySelectorAll('.acert');

    if(acerT.length == 12){

      alert('parabéns, você ganhou!!!!!');
    }
  }

  const checkCards = () => {
    const primcharacter = primCard.getAttribute('data-character'); 
    const segcharacter = segCard.getAttribute('data-character'); 

    if(primcharacter == segcharacter){

      primCard.firstChild.classList.add('acert');
      segCard.firstChild.classList.add('acert');

      primCard = '';
      segCard = '';

      checkEndGame();
    }
    else{
      setTimeout(() => {
 
        primCard.classList.remove('reveal-card'); 
        segCard.classList.remove('reveal-card'); 

        primCard = '';
        segCard = '';
       }, 700);
    }
  }


const revCard = ({ target }) =>{
  if( target.parentNode.className.includes('reveal-card')){

   return;

  }

  if(primCard == ''){
  
    target.parentNode.classList.add('reveal-card');
    primCard = target.parentNode; 

    
  }
  else if(segCard == ''){

    
    target.parentNode.classList.add('reveal-card');
    segCard = target.parentNode; 
    
    checkCards()
  }

  

}
   const createCard = (character) => {

      const card = createElement('div', 'card');
      const front = createElement('div', 'face front');
      const back = createElement('div', 'face back');
    
      front.style.backgroundImage = `url('./images/${character}.jpg')`;
    
      card.appendChild(front);
      card.appendChild(back);
      card.addEventListener('click', revCard);
      card.setAttribute('data-character', character)

   return card;
}

const loadGame = () => {
   const duplicateCharacters = [ ...characters, ...characters ];
 
   const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);
 
   shuffledArray.forEach((character) => {

     const card = createCard(character);

     grid.appendChild(card);
   }); 
  
 }

loadGame();

