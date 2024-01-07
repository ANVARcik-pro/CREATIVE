let btn = document.querySelector('.btn');
let btn1 = document.querySelector('.btn1');
let big = document.querySelector('.big');
let box = document.querySelector('.box');



btn.addEventListener('click', function(){
    if(big.classList.contains('new1')){
       big.classList.remove('new1')
       big.textContent = 'salom';
    } else {
       big.classList.add('new1')
       big.textContent ='xayr';
    }
    box.classList.add('new2')
    btn1.classList.contain('new2')
})