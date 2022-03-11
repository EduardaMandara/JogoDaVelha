// querySelectorAll captura em cima de uma propriedade que passamos, neste caso passamos a classe .celula
const celulas = document.querySelectorAll (".celula");

// let, pode ser váriada, const não vária.
let checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

// Elemento de interação, neste caso usaremos o evento Click.
document.addEventListener("click", (event) => {
    // se houver uma interação com a celula que criamos, então será lido o console.log
    if(event.target.matches(".celula")) {
    // console.log, vai dar um retorno do id da celula que clicamos.
        jogar(event.target.id)
    }
});

//Checagem dos jogadores.
function jogar(id) {
    const celula = document.getElementById(id);

    //checando de quem é a vez
    turno = checarTurno ? JOGADOR_X : JOGADOR_O;

    //depois de verificar de quem é a vez, ele irá atribuir cada caractere para o jogador da vez. 
    celula.textContent = turno;

    //joga a vez para o oposto do checarTurno. 
    checarTurno = !checarTurno;
    checarVencedor(turno)
}

//Checagem do vencedor
function checarVencedor(turno) {

}
