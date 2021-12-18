const present = document.querySelector('.crewl');
const otherCrew = document.querySelector('.other-crew');
const menu = document.querySelector('.menu img');
const nav = document.querySelector('nav');

//CANCEL BUTTON

menu.addEventListener('click', closeBtn);

function closeBtn() {
   let btnDisplay = menu.getAttribute('src');
   console.log(btnDisplay);
   if (btnDisplay === '../starter-code/assets/shared/icon-hamburger.svg' || btnDisplay === '/starter-code/assets/shared/icon-hamburger.svg') {
      console.log('true');
      menu.setAttribute('src', '../starter-code/assets/shared/icon-close.svg');
      nav.style.display = 'grid';
     
   }
    if (btnDisplay === '../starter-code/assets/shared/icon-close.svg' || btnDisplay === '/starter-code/assets/shared/icon-close.svg') {
      console.log('true');
      menu.setAttribute('src', '../starter-code/assets/shared/icon-hamburger.svg');
      nav.style.display = 'none';
   }
}


// CREW SLIDER
let crewArray = ['/starter-code/crew-pilot.html', '/starter-code/crew-commander.html', '/starter-code/crew-specialist.html', '/starter-code/crew-engineer.html'];

for (let i = 0; i < crewArray.length; i++) {
   const element = crewArray[i];

   const newCrew = document.createElement('a');
   newCrew.className = 'newlink';
   console.log(newCrew)
   newCrew.setAttribute('href', element);

   newCrew.setAttribute('onclick', 'clickLink(this)');

   otherCrew.appendChild(newCrew);
   
}

function clickLink(e) {
   let linkHref = e.getAttribute('href');
   present.setAttribute('href', linkHref);
   
}

