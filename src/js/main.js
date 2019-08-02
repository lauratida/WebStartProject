var button = document.querySelector('#navbar-button');
// console.log(button);
var modal = document.querySelector('#modal1');
var close = document.querySelector('#closemodal');

button.addEventListener('click', function(){
  console.log(modal.classList);
  modal.classList.add('modal_active');
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});


