
// carousel start
const state = {};
const carouselList = document.querySelector('.carousel__list');
const carouselItems =document.querySelectorAll('.carousel__item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var isItem = newActive.closest('.carousel__item');

  if (!isItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(newActive);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 1) {
    return -current
  }

  return diff;
}
// carousel end

// form validation start
function validate() {

  function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  
    return re.test(input_str);
  }
  var phone = document.getElementById('txtPhone').value;
      
  if( document.myForm.name.value == "") {
     alert( "Please provide your name!" );
     document.myForm.name.focus() ;
     return false;
  }
  if( document.myForm.last_name.value == "" ) {
    alert( "Please provide your last name!" );
    document.myForm.last_name.focus() ;
    return false;
 }
  if (!validatePhoneNumber(phone)) {
    alert( "Please provide your phone!" );
    document.myForm.phone.focus() ;
  } 

  if( document.myForm.service.value == "-1" ) {
     alert( "Please provide your service!" );
     document.myForm.service.focus() ;
     return false;
  }
  return( true );
}
// form validation endć