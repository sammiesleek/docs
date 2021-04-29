function Typewriter(txtElement, words, wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.WordIndex=0;
    this.wait= parseInt(wait,10);
    this.isDeleting=false;
    this.type();
    };

    Typewriter.prototype.type= function(){
        const current = this.WordIndex & this.words.length;
        const fullTxt = this.words[current];
       if(this.isDeleting){
        this.txt =fullTxt.substring(0, this.txt.length -1);
        }
       else{
            this.txt =fullTxt.substring(0, this.txt.length +1  );
        };
        this.txtElement.innerHTML =`<span class="txt">${this.txt}</span>`;


       let typeSpeed=300;
       

       if(this.isDeleting){
           typeSpeed /= 2;
       }

       if(!this.isDeleting && this.txt === fullTxt){
           typeSpeed = this.wait;
           this.isDeleting=true;
       }
       else if(this.isDeleting && this.txt===''){
            this.isDeleting=false;
            this.WordIndex++;
            typeSpeed=500;
       };
      if(this.WordIndex >2){
        this.WordIndex=0
       };
       

     setTimeout( ()=>this.type(), typeSpeed);
}

//type method

//init on load
document.addEventListener('DOMContentLoaded', init);

//init app
  function init(){
   const txtElement= document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait=txtElement.getAttribute('data-wait');
    new Typewriter (txtElement,words, wait);

};

