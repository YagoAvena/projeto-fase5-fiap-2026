const botao = document.getElementById("agrobot-btn");
const chat = document.getElementById("agrobot-chat");
const fechar = document.getElementById("close-chat");

botao.addEventListener("click", () => {
    chat.classList.add("active");
});

fechar.addEventListener("click", () => {
    chat.classList.remove("active");
});

function adicionarMensagem(texto){

    const area =
        document.getElementById("agrobot-messages");

    area.innerHTML += `
        <div class="bot-message">
            ${texto}
        </div>
    `;

    area.scrollTop = area.scrollHeight;
}

function respostaClima(){

    adicionarMensagemBot(
    "⏳ Analisando sua pergunta..."
);

setTimeout(() => {

    const mensagens =
        document.getElementById("agrobot-messages");

    mensagens.lastElementChild.remove();

    mostrarDigitando();

setTimeout(() => {

    esconderDigitando();

    adicionarMensagemBot(
        "🌦️ Com base nos dados disponíveis, as condições climáticas atuais são favoráveis para atividades agrícolas."
    );

}, 1200);

}, 1000);


}

function respostaRastreamento(){

    adicionarMensagemBot(
    "⏳ Analisando sua pergunta..."
);

setTimeout(() => {

    const mensagens =
        document.getElementById("agrobot-messages");

    mensagens.lastElementChild.remove();

     mostrarDigitando();

setTimeout(() => {

    esconderDigitando();

    adicionarMensagemBot(
        "🚚 De acordo com as informações de rastreamento disponíveis, seu pedido está em processo de transporte e dentro do prazo estimado. Continue acompanhando as atualizações para verificar o andamento da entrega."
    );

}, 1200);

}, 1000);

}
function respostaMarketplace(){

    adicionarMensagemBot(
    "⏳ Analisando sua pergunta..."
);

setTimeout(() => {

    const mensagens =
        document.getElementById("agrobot-messages");

    mensagens.lastElementChild.remove();

    mostrarDigitando();

setTimeout(() => {

    esconderDigitando();

    adicionarMensagemBot(
        "🛒 O marketplace da AgroSmart reúne uma variedade de produtos agrícolas, incluindo sementes, fertilizantes e equipamentos. Explore as opções disponíveis para encontrar soluções adequadas às necessidades da sua produção."
    );

}, 1200);


}, 1000);

}
function respostaPlantio(){

    adicionarMensagemBot(
    "⏳ Analisando sua pergunta..."
);

setTimeout(() => {

    const mensagens =
        document.getElementById("agrobot-messages");

    mensagens.lastElementChild.remove();

    mostrarDigitando();

setTimeout(() => {

    esconderDigitando();

    adicionarMensagemBot(
        "🌱 Com base nas boas práticas agrícolas, recomenda-se avaliar a umidade do solo, as condições climáticas e o período ideal da cultura antes de iniciar o plantio, garantindo melhores resultados e produtividade."
    );

}, 1200);
}, 1000);
        
    
} 



function adicionarMensagemUsuario(texto){

    const area =
        document.getElementById("agrobot-messages");

    area.innerHTML += `
        <div class="user-message">
            ${texto}
        </div>
    `;

    area.scrollTop = area.scrollHeight;

}

function adicionarMensagemBot(texto){

    const area =
        document.getElementById("agrobot-messages");

    area.innerHTML += `
        <div class="bot-message">
            ${texto}
        </div>
    `;

    area.scrollTop = area.scrollHeight;

}

function enviarPergunta(){

    

    const input =
        document.getElementById("agrobot-input");

    const pergunta =
        input.value.toLowerCase().trim();

    if(!pergunta) return;

    adicionarMensagemUsuario(pergunta);

    let resposta = "";

    if(pergunta.includes("clima")){

        resposta =
        "🌦️ As condições climáticas atuais são favoráveis.";

    }

    else if(pergunta.includes("entrega")){

        resposta =
        "🚚 Sua entrega está em trânsito.";

    }

    else if(pergunta.includes("marketplace")){

        resposta =
        "🛒 Temos diversos produtos disponíveis.";

    }

    else if(pergunta.includes("plantio")){

        resposta =
        "🌱 Recomendamos verificar a umidade do solo antes do plantio.";

    }

    else if(pergunta.includes("suporte")){

        resposta =
        "📞 Entre em contato pela página Fale Conosco.";

    }

    else{

        resposta =
        "🤖 Ainda estou aprendendo. Tente perguntar sobre clima, entregas, plantio ou marketplace.";

    }

    adicionarMensagemBot(resposta);

    input.value = "";

}

document
    .getElementById("agrobot-input")
    .addEventListener("keypress", function(event){

        if(event.key === "Enter"){

            enviarPergunta();

        }

    });

    function respostaSuporte(){

    adicionarMensagemUsuario("Suporte");

    adicionarMensagemBot(
        "📞 Você pode entrar em contato através da página Fale Conosco."
    );

}

function mostrarDigitando(){

    const area =
        document.getElementById("agrobot-messages");

    area.innerHTML += `
        <div class="typing" id="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    area.scrollTop = area.scrollHeight;

}

function esconderDigitando(){

    const typing =
        document.getElementById("typing-indicator");

    if(typing){

        typing.remove();

    }

}