const main = document.querySelector('main');
main.remove();
main.id = 'victory'

const newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");
newHeader.textContent = 'Melvin is the champion'
console.log(newHeader);