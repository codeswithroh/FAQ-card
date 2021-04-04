const show1= document.querySelector('#key1');
const question1= document.querySelector('#question1')
const answer1= document.querySelector('.answer-1');

// question-2
const show2= document.querySelector('#key2');
const question2= document.querySelector('#question2')
const answer2= document.querySelector('.answer-2');

// question-3
const show3= document.querySelector('#key3');
const question3= document.querySelector('#question3')
const answer3= document.querySelector('.answer-3');
// question-4
const show4= document.querySelector('#key4');
const question4= document.querySelector('#question4')
const answer4= document.querySelector('.answer-4');

function faq(s,q,a){
    s.classList.toggle('rotate');
    q.classList.toggle('bold');
    a.classList.toggle('show');
};

show1.addEventListener('click', function(){
   faq(show1,question1,answer1);
})


show2.addEventListener('click', function(){
    faq(show2, question2, answer2);
})

show3.addEventListener('click', function(){
    faq(show3, question3, answer3);
})

show4.addEventListener('click', function(){
    faq(show4, question4, answer4);
})

// loading animations

const grids= document.querySelector('.grid-container');

grids.addEventListener('load', function(){
    grids.classList.add('slides');
})


