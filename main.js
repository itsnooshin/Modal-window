'use strict';
const btnMain = document.querySelector('.btn-primary');
const closeModal = document.querySelector('.close-modal');
const mainContect = document.querySelector('.wrapper');

btnMain.addEventListener('click' , function(){
    mainContect.classList.remove('hidden');
    btnMain.style.display = 'none';
   
   
})

closeModal.addEventListener('click' , function(){
    mainContect.classList.add('hidden');
    btnMain.style.display = 'block';
});




document.addEventListener('keydown' , function(event){
    mainContect.classList.add('hidden');
    btnMain.style.display = 'block';
});






