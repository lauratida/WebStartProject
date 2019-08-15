var button = document.querySelector('#navbar-button');
var modal = document.querySelector('#modal1');
var close = document.querySelector('#closemodal');
var timerId = setTimeout(() => {modal.classList.remove('modal_active');}, 1000);

button.addEventListener('click', function(){
  modal.classList.add('modal_active');
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    modal.classList.remove('modal_active');
  }, 5000);
});

close.addEventListener('click', function(){
  modal.classList.remove('modal_active');
});

