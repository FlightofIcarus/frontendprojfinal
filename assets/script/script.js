async function calcular(){
    event.preventDefault();

    const inputValor = document.getElementById("investimento").value;
    const inputTempo = document.getElementById("tempo").value;
    const inputTaxa = document.getElementById("taxa").value;

    if (inputValor < 1 || inputTempo < 1) {
        alert("O valor mínimo de investimento deve ser R$1. O número mínimo de meses investidos deve ser de 1 mês.");
        return;
    }

    const objData = {valor: Number(inputValor), tempo: Number(inputTempo), taxa: Number(inputTaxa)};

    const response = await fetch("http://localhost:8000/api/bff",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objData)
    });
  
   return response;
};

async function retornaResultado(){
    calcular()
    .then( response => response.json())
    .then(data => {
        const resultadoContainer = document.getElementById("resultado");
        const pJuros = document.createElement("p");
        pJuros.style.textAlign = "center";
        pJuros.style.fontSize = "2rem";
        pJuros.textContent = `O valor total de juros do período foi: R$${data.Juros}`;
        resultadoContainer.appendChild(pJuros);

        const pMontante = document.createElement("p");
        pMontante.style.textAlign = "center";
        pMontante.style.fontSize = "2rem";
        pMontante.textContent = `O montante deste investimento é R$${data.Montante}`;
        resultadoContainer.appendChild(pMontante);

        const pROI = document.createElement("p");
        pROI.style.textAlign = "center";
        pROI.style.fontSize = "2rem";
        pROI.textContent = `A taxa de Retorno Sobre Investimento - ROI foi de ${data.ROI}%`;
        resultadoContainer.appendChild(pROI);

        const divImagem = document.createElement("div");
        divImagem.style.display = "flex";
        divImagem.style.alignItems = "center";
        divImagem.style.justifyContent = "center";

        const img = document.createElement("img");
        img.src = "https://jonmgomes.com/wp-content/uploads/2020/05/Comp_1.gif";
        img.alt = "Animação de gráfico de crescimento";
        img.style.width = "30%";

        divImagem.appendChild(img);
        resultadoContainer.appendChild(divImagem);

        const inputValor = document.getElementById("investimento");
        const inputTempo = document.getElementById("tempo");
        const inputTaxa = document.getElementById("taxa");
        inputValor.value = "";
        inputTempo.value = "";
        inputTaxa.value = "";

        console.log(data);
    })
}

/* function validarInvestimento() {
    const investimentoInput = document.getElementById('investimento');
    const investimentoError = document.getElementById('investimento-error');

    if (investimentoInput.value < 1) {
        investimentoInput.classList.add('error');
        investimentoError.textContent = "O valor deve ser igual ou maior a R$1";
    } else {
        investimentoInput.classList.remove('error');
        investimentoError.textContent = "";
    }
}

investimento.addEventListener('input', validarInvestimento);

function validarTempo() {
    const tempoInput = document.getElementById('tempo');
    const tempoError = document.getElementById('tempo-error');

    if (tempoInput.value < 1) {
        tempoInput.classList.add('error');
        tempoError.textContent = "O tempo deve ser igual ou maior 1 mês";
    } else {
        tempoInput.classList.remove('error');
        tempoError.textContent = "";
    }
}

tempo.addEventListener('input', validarTempo); */
