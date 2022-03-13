// querySelectorAll captura em cima de uma propriedade que passamos, neste caso passamos a classe .celula
const celulas = document.querySelectorAll (".celula");

// let, pode ser váriada, const não vária.
let checarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";
const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
]

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

    //verificar se aquela celula pertence aquele jogador. 
    celula.classList.add(turno);

    //joga a vez para o oposto do checarTurno. 
    checarVencedor(turno);
}

//Checagem do vencedor
function checarVencedor(turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
        //some: se alguma das posições retornar true, todas irão ser true | Every: todas precisam ser true, se alguma não retornar true, todas irão retornar false.
    });

    if (vencedor){
        encerrarJogo(turno);
    } else if (checarEmpate()) {
        encerrarJogo();
    } else {
        checarTurno = !checarTurno;
    }

}

function checarEmpate(){
    let x = 0;
    let o = 0;

    for (index in celulas){
        if(!isNaN(index)){
            if (celulas[index].classList.contains(JOGADOR_X)) {
                x++;
            }

            if(celulas[index].classList.contains(JOGADOR_O)) {
                o++;
            }
        }
    }    
    return x + o === 9 ? true : false;
}

//se vier com parametro, prossegue vencedor, se não tiver parametro, será mantido nulo(null)
function encerrarJogo(vencedor = null) {
    const telaEscura = document.getElementById("tela-escura");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let mensagem = null;

    telaEscura.style.display = "block";
    telaEscura.appendChild(h2);
    telaEscura.appendChild(h3);

    if(vencedor){
        h2.innerHTML = `O jogador <span>${vencedor}</span> venceu!`;
    } else {
        h2.innerHTML = "Empatou!";
    }

    let contador = 5;
    setInterval(() => {
        h3.innerHTML = `Reiniciando em ${contador--}`;
    }, 1000);
    setTimeout(() => location.reload(), 6000);

}