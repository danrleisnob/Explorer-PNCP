var data = {
    chatinit:{
        title: ["Olá <span class='emoji'> &#128075;</span>","Eu Sou Mr. Robot 🤖","Em que posso te ajudar?"],
        options: ["duvidas 🕵️‍♂️","novidades","erros 🚫","webnar 🎥"]
    },
    duvidas: {
        title:["Por favor selecione uma categoria"],
        options:['preenchimento','Bollywood','Web Series','Others'],
        url : {
            
        }
    },
    
    novidades: {
        title:["Algumas novidades"],
        options:["Saiba tudo sobre o Registro cadastral unificado","PNCP já pode divulgar contratações do Banco do Brasil e da Caixa Econômica Federal","Pesquisa - Ajude-nos a melhorar os processos de contratações públicas"],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["https://www.gov.br/pncp/pt-br/acesso-a-informacao/comunicados/comunicado-no-1-2023-portal-nacional-de-contratacoes-publicas-pncp","https://www.gov.br/pncp/pt-br/acesso-a-informacao/noticias/pncp-ja-pode-divulgar-contratacoes-do-banco-do-brasil-e-da-caixa-economica-federal","https://www.gov.br/compras/pt-br/acesso-a-informacao/noticias/pesquisa-ajude-nos-a-melhorar-os-processos-de-contratacoes-publicas"]
        }
    },
    erros: {
        title:["Obrigado por nos consultar","Veja se sua dúvida esta relacionada"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
    },
    electronics: {
        title:["Olá eu sou o danrlei eletronico","Click on it to know more"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    beauty: {
        title:["Olá eu sou o danrlei beauty","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    mobiles: {
        title:["Olá eu sou o danrlei mobile","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    men: {
        title:["danrlei man","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    women: {
        title:["danrlei para mulheres","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    webnar: {
        title:["Não esqueça de assistir os webnar, o vídeo de hoje pode ser a dúvida sanada de amanhã 😉"],
        options: ["Webnar PNCP","Catálogo Eletrônico de Padronização"],
        url : {
            more:"https://www.gov.br/pncp/pt-br",
            link:["https://www.gov.br/pncp/pt-br/acesso-a-informacao/Capacite-se/#MENU","https://www.gov.br/pncp/pt-br/acesso-a-informacao/Capacite-se/#CEP"]
        }
    },
    preenchimento: {
        title: ["Obrigado por nos consultar","Veja se sua dúvida está relacionada"],
        options: ["Como Preencher Amparo legal?","Está faltando um Amparo Legal?","Como Preencher um campo da licitação","Maior Lance"],
        url: {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Dúvidas sobre como ou qual o preenchimento de um amparo legal deve ser tirada com o setor juridico responsável do órgão.","Se o usuário informar alguma ausência nesses aparos legais o N1 deverá subir o chamado para o N3 para que seja avaliado.","Nossa instituição não possui autoridade para indicar ou prescrever como deve ser conduzida uma licitação, uma vez que esta é uma prerrogativa exclusiva dos licitantes e das normativas vigentes.","Clique em scripts depois vá até a coluna erro, pesquise maior lance"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.gov.br/pncp/pt-br",
            link:["Olá mundo","olá mundo2","olá mundo3","olá mundo4","olá mundo5"]
        }
    },
}

document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");

var len1 = data.chatinit.title.length;

function showChatBot() {
    console.log(this.innerText);
    if (this.innerText == 'ABRIR CHAT') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'FECHAR CHAT';
        initChat();
    } else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function () {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))
}

var j = 0;

function handleChat() {
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll(".opt").forEach(el => {   el.remove();
    })
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
}

function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function () {
            handleDelay(title[i]);
        }, i * 500)

    }

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    if (isObjectEmpty(url) == true) {
        console.log("ter mais opções");
        setTimeout(function () {
            showOptions(options);
        }, title.length * 500)

    } else {
        console.log("resultado final");
        setTimeout(function () {
            handleOptions(options, url);
        }, title.length * 500)

    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var optionText = url.link[i];
        var inp = '<span class="m-link" onclick="handleOptionClick(\'' + optionText + '\')">' + options[i] + '</span>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }
    var opt = document.createElement("span");
    var inp = '<a class="m-link" href="' + url.more + '">Ver mais</a>';

    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleOptionClick(optionText) {
    var elm = document.createElement("p");
    elm.innerHTML = optionText;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}