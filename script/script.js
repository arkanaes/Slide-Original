

/* NodeList dos elementos */
const slides = document.querySelectorAll('.slide');
const slideImagens = document.querySelectorAll('.slide-image');
const slideDescricoes = document.querySelectorAll('.slide-descricao');
const slideRadioButtons = document.querySelectorAll('.slide-radio');
const slideRadioSombra = document.querySelectorAll('.radio-slide-sombra');
const slideBotoesFlecha = document.querySelector('.slide-botoes-flecha');
const slideBotaoFlechaEsquerda = document.querySelector('.slide-botao-flecha-esquerda');
const slideBotaoFlechaDireita = document.querySelector('.slide-botao-flecha-direita');
let indexTemporario = 0; //Salva o ultimo index chamado pela função redimensionamentoSlide()
let tempoTransicaoSlide = 5000 // 5000ms
let slideIntervalo; //Utilizado para referenciar um setIntervalo dentro da função defineIntervalo() e limpaIntervalo()



/* 
 * Após a página carregar ajusta o slide 
 * setTimeout definido para corrigir um bug de render
*/
setTimeout(redimensionamentoSlide, 10)
defineIntervalo();
/**
 * 
 * @description Ajusta o tamanho da div slide para dispositivos Mobile.
 * @param {int} index index = 0 | É passado um inteiro para achar o elemento respectivo dentro de um NodeList. Por exemplo  slide[0] slideImagens[0]
 * 
 */
function redimensionamentoSlide(index){
    /*
        Verifica se o index não é um numero.
    */
    if(isNaN(index) == true){
        let slide = slides[indexTemporario];
        let slideImagen = slideImagens[indexTemporario];
        let slideDescricao = slideDescricoes[indexTemporario];
        //768 largura maxima do dispositivo.
        if(window.innerWidth < 768){
            let tamanho =  slideImagen.clientHeight + slideDescricao.clientHeight;
            slide.style.height = tamanho + "px";
        }else{
            slide.style.height = "auto";
        }
    }else{
        let slide = slides[index];
        let slideImagen = slideImagens[index];
        let slideDescricao = slideDescricoes[index];
        if(window.innerWidth < 768){
            let tamanho =  slideImagen.clientHeight + slideDescricao.clientHeight;
            slide.style.height = tamanho + "px";
        }else{
            slide.style.height = "auto";
        }
        indexTemporario = index; //Armazena o ultimo index, para caso seja utilizado window.onresize
    }
}

/* Cada vez que a página é dimensionada chama a função redimensionamentoSlide()*/
window.onresize = redimensionamentoSlide;

const clickEvent = new Event('click'); //Utilizado para poder chamar o evento do elemento na função nativa dispatchEvent() 
slideRadioButtons.forEach(function (element){

    element.addEventListener("click",trocaSlide);

})
/**
 * @description Troca o slide.
 * @param {element} e Elemento
 */
function trocaSlide(e){
    //Retorna o número do index do elemento dentro do NodeList
    let index = Array.prototype.indexOf.call(slideRadioButtons, e.target);
    //Desabilita todos os slides
    slides.forEach(function (element){
       element.classList.remove('slide-ativo');
    });
    //Desabilita a sombra
    slideRadioSombra.forEach(function (element){
        element.classList.remove('slide-radios');
    });
    //Habilita apenas o slide respectivo ao index do radio
    slides[index].classList.add('slide-ativo');
    //Habilita a sombra
    slideRadioSombra[index].classList.add('slide-radios');
    //Chama a função para redimensionar o slide.
    redimensionamentoSlide(index);
}

/**
 * Faz o slide passar para o próximo automaticamente.
 */

function defineIntervalo(){
    slideIntervalo = setInterval(function () {
        if(indexTemporario < slideRadioButtons.length)
        {
    
            indexTemporario++;
            if(indexTemporario != slideRadioButtons.length) {
                slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
            }else{
                indexTemporario = 0;
                slideRadioButtons[indexTemporario].dispatchEvent(clickEvent); 
            }
          
        }else{
            indexTemporario = 0;
            slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
        }
    }, tempoTransicaoSlide);
}

function limpaIntervalo(){
    window.clearInterval(slideIntervalo)
}

slideBotoesFlecha.addEventListener('mouseover', limpaIntervalo);
slideBotoesFlecha.addEventListener('mouseout', defineIntervalo);
slideBotaoFlechaEsquerda.addEventListener('click', passarSlideEsquerda);
slideBotaoFlechaDireita.addEventListener('click', passarSlideDireita);

function passarSlideEsquerda(){

    if(indexTemporario > 0){
        indexTemporario--;
        slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
    }else{
        indexTemporario = (slideRadioButtons.length - 1)
        slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
    }


}
function passarSlideDireita(){

    if(indexTemporario < slideRadioButtons.length)
    {
        indexTemporario++;
        if(indexTemporario != slideRadioButtons.length) {
            slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
        }else{
            indexTemporario = 0;
            slideRadioButtons[indexTemporario].dispatchEvent(clickEvent); 
        }
      
    }else{
        indexTemporario = 0;
        slideRadioButtons[indexTemporario].dispatchEvent(clickEvent);
    }
   
}
