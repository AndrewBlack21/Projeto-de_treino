const treinos = {
    1: {
        titulo: "Dia 1",
        descricao: "Treino focado em quadriceps",
        imagem: "imagens/quadriceps.gym.png",
        exercicios: [
            "CADEIRA ABDUTORA 3X8 / 1x10 ",
            "ELEVAÇÕES PELVICAS 3X8 / 1x10 ",
            "AGACHAMENTO SMITH OU LIVRE EM GRANDE AFASTAMENTO 3X8 / 1x10",
            "AGACHAMENTO BULGARO NO SMITH OU LIVRE 3X10 / 1x8",
            "LEG PRESS GRANDE AFASTAMENTO 3X8 / 1x10",
            "CADEIRA EXTENSORA 3X10 / 1x12",
            "CADEIRA FLEXORA 3X10 / 1x12",
            "PANTURRILHA SENTADO 4X12",
            "PANTURRILHA NO LEG PRESS 4X12"
        ]
    },
    2: {
        titulo: "Dia 2",
        descricao: "Treino de Tronco",
        imagem: "imagens/tronco.gym.jpg",
        exercicios: [
            "SUPINO INCLINADO C BARRA OU HALTER 3X8",
            "PUXADOR ALTO COM TRIAGULO 3X8",
            "REMADA CURVADA PRONADA 3X8",
            "REMADA UNILATERAL C HALTER OU MAQUINA PEGADA NEUTRA 3X8",
            "PULLDOWN CORDA EM PE 3X8",
            "ROSCA ALTERNADA C HALTER 3X8",
            "HIPEREXTENSAO DE TRONCO NO BANCO ROMANO 3X8",
            "ABDOMINAL CRUNCH CABO AJOELHADO 3X8",
            "PRANCHA ABDOMINAL 3X1 min"
        ]
    },
    3: {
        titulo: "Dia 3",
        descricao: "Treino de Gluteos / Posteriores de coxa e abdomen",
        imagem: "imagens/gluteon.jpg",
        exercicios: [
            "CADEIRA ADUTORA 3x10 / 1x12",
            "CADEIRA ABDUTORA 3x10 / 1x12",
            "ELEVAÇÃO PELVICAS LIVRE / SMITH OU APARELHO 3X10 / 1X12",
            "CADEIRA OU MESA FLEXORA 3x8 / 1x12",
            "AFUNDO NO SMITH OU LIVRE COM BARRA OU HALTER 3x10 / 1x12",
            "STIFF NO SMITH OU LIVRE COM BARRA OU HALTER 3x10 / 1x12",
            "PANTURRILHA NO LEG PRESS 4x12",
            "PANTURRILHA EM PÉ 4x12"
        ]
    }
};

document.getElementById("selectTreino").addEventListener("change", function() {
    const treinoId = this.value;
    if (treinoId > 0) {
        const treino = treinos[treinoId];

        // Atualiza os elementos da página com os dados do treino selecionado
        document.getElementById("tituloTreino").textContent = treino.titulo;
        document.getElementById("descricaoTreino").textContent = treino.descricao;
        document.getElementById("imgTreino").src = treino.imagem;

        // Atualiza a lista de exercícios
        const listaExercicios = document.getElementById("listaExercicios");
        listaExercicios.innerHTML = "";
        treino.exercicios.forEach(exercicio => {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = exercicio;
            listaExercicios.appendChild(li);
        });
    }
});

// collapse 
const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

// Calculadora de IMC

function calcularIMC(){
    const altura = parseFloat(document.getElementById("height").value);
    const peso = parseFloat(document.getElementById("weight").value);
    const resultadoDiv = document.getElementById("resultado");

    if(isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0){
        resultadoDiv.textContent = "Por favor, insira valores validos!";
        return;
    }

    const imc = peso / (altura * altura);

    let classificacao = '';

    if(imc < 18.5){
        classificacao = 'Abaixo do peso';
    }
    else if( imc < 24.9){
        classificacao = 'Peso normal';
    }
    else if ( imc < 29.9){
        classificacao = 'Sobrepeso';
    } 
    else{
        classificacao = 'Obesidade';
    }

    resultadoDiv.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
};

// efeito cascata

document.addEventListener("DOMContentLoaded", function(){
    const fallingImagesContainer = document.querySelector('.falling-images');
    const numImages = 10;

    const images = [
        'imagens/ficha.png',
        'imagens/corda.png',
        'imagens/halter.png'
    ];

    for(let i = 0; i < numImages; i++){
        const img = document.createElement('img');
        img.src = images[ i % 3];
        img.classList.add(`img${i + 1}`);
        fallingImagesContainer.appendChild(img);
    }
});

