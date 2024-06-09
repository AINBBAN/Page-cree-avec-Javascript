// script.js

// Supprimer l'élément avec l'ID 'a-supprimer'
document.getElementById('a-supprimer').remove();

let header = document.createElement('header');
header.textContent = 'Hello';
header.style.backgroundColor = '#e3b04b';
header.style.color = 'white';
header.style.fontSize = '2em';
header.style.textAlign = 'center';

let Sheader = document.createElement('div');
Sheader.innerHTML = "<a href='https://www.google.com'>Google</a> / <a href='http://www.google.com '>Google</a>";
Sheader.style.backgroundColor = '#f1d6ab';

let p = document.createElement('p');

p.textContent = 'Ceci est un paragraphe ecrit avec javascript';


document.body.append(header, Sheader, p);
