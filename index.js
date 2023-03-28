const switchButton = document.getElementById('switch')
switchButton.addEventListener('click',()=>{
  document.body.classList.toggle('claro');
  document.querySelector('header').classList.toggle('claro');
  document.querySelector('nav').classList.toggle('claro');
  document.querySelector('main').classList.toggle('claro');
  document.getElementById('links').classList.toggle('claro');
  document.getElementById('links2').classList.toggle('claro');
  document.getElementById('textopro1').classList.toggle('claro');
  document.getElementById('textopro2').classList.toggle('claro');
  document.querySelector('footer').classList.toggle('claro');
  switchButton.classList.toggle('active')
})