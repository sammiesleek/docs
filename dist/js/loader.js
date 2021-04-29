const loader = document.querySelector('.loader');
const main = document.querySelector('.contai-ner');

function preload(){
    setTimeout(()=>{
        // loader.style.opacity='0';
        loader.style.display='none';
        main.style.display='block';
        setTimeout(()=>{
            main.style.opacity='1';
        },400)
    },4000)
}

preload();