let text = document.getElementById('text')
const btn = document.getElementById('btn')

btn.addEventListener('click',butom);
text.addEventListener('mouseenter',entra);
text.addEventListener('mouseout',sair);

function butom(){
 text.style.background='red'
}

function entra(){
  text.style.font='5em'
  text.style.color='green'
  text.style.background='yellow'
}

function sair(){
  text.style.font='100px'
  text.style.color='blue'
  text.style.background='white'
}

alert(`ola mundo`)