# Slide-Original
Slide Responsivo, com o intuito de ser algo pratico.


# Referências usadas nesse projeto

## --Fonte--
[Oswald](https://github.com/googlefonts/OswaldFont) - 
[Licença](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

## --Fontawesome-- 
[arrow-left-solid](https://fontawesome.com/icons/arrow-left?s=solid&f=classic), 
[arrow-right-solid](https://fontawesome.com/icons/arrow-right?s=solid&f=classic)- 
[Licença](https://fontawesome.com/license/free)

# Guia de uso
###### Edite apenas os arquivos html. Os arquivos de estilização e script foram projetados para se adaptar aos dados inseridos no html.

1. O codigo referente ao slide se encontra dentro dessa tag:
`<div class="slide-main"></div>`

1.1. Quando for incorporar no seu projeto basta copiar essa tag e seus filhos.

2. Para adicionar um slide, primeiro adicione esse bloco:

`        <div class="slide slide-ativo">
            <div class="slide-sombra">         
                <img class="slide-image" src="/image/slide-banner-01.png">
                <div class="slide-so-escurece"></div>
            </div>
            <div class="slide-conteudo">
                <div class="container">
                    <div class="slide-conteudo-esquerda">
                        <div class="slide-titulo">
                            <h1>Solução para</h1>
                            <h1 class="slide-destaque">Lorem Title</h1>
                        </div>
                        <div class="slide-descricao">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptates voluptas obcaecati excepturi laudantium, eveniet ratione dignissimos nemo assumenda atque iste minus nulla porro natus autem dolores rem quis odit!</p>
                            <a href="/index.html"><button class="slide-botao">Saiba Mais</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        
2.1. O primeiro slide deve conter na `<div>` principal a classe `slide-ativo`. Os demais slide que forem adicionados posteriormente não devem conter essa classe.

2.2. Você pode alterar o content das tag `<img>`,`<h1>`, `<p>`.

3. Adicione o código a seguir dentro da tag de `ul`.
`                <li>
                    <label for="radio-slide-01">
                        <div class="radio-slide-sombra"></div>
                        <img class="slide-lista" width="100%" src="/image/slide-banner-01.png" alt="">
                    </label>
                </li>`
3.1. Altere as informações `<img>` e `<label>`

4. Adicione input radio abaixo:
`<input type="radio" name="slide-radio" id="radio-slide-01" class="slide-radio">`

4.1. Altere as informações do `<input>` conforme foi inserido na `<label>`
