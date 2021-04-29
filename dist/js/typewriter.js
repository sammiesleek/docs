const Typewriter = function(txtElement,words,wait=3000){
    this.txtElement=txtElement;
    this.words;
    this.txt='';
    this.wordIndex=0;
    this.wait=parseInt(wait,10);
    this.type();
    this.isDeleting=false;

}
//type method
Typewriter.prototype.type= function(){
    const current = this.WordIndex & this.words.length;
        const fullTxt = this.words[current];
   // const fullTxt =this.words[current];
    console.log(current)
    setTimeout(()=>this.type(), 500)
}
//init app
function init(){
    const txtElement=document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init typewriter
    new Typewriter(txtElement,words,wait)
}

//initialize on DOM
document.addEventListener('DOMContentLoaded',init);




//sidebar toggler
const hamburg = document.querySelector('.hamburger');
const sideBar =document.querySelector('.side-br');
function hide(){
    sideBar.classList.toggle('hide')
}
hamburg.addEventListener('click',hide);