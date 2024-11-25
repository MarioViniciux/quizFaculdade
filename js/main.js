document.addEventListener("DOMContentLoaded", () => {
    const perguntas = [
        {
            nivel: "Fácil",
            pergunta: "O que seria a instalação elétrica?",
            numero: 1,
            opcoes: {
                a: "Um conjunto de componentes e equipamentos elétricos que distribuem energia elétrica em um determinado ambiente, como uma residência ou indústria.",
                b: "Um conjunto de fios e cabos que conectam diferentes aparelhos eletrônicos, mas sem a presença de componentes de proteção ou distribuição de energia.",
                c: "Um sistema que transforma energia elétrica em energia mecânica, como um motor elétrico.",
                d: "Um conjunto de dispositivos eletrônicos utilizados para a comunicação de dados."
            },
            correta: "a"
        },
        {
            nivel: "Fácil",
            pergunta: "Sobre instalações de redes de lógica, marque a opção correta:",
            numero: 2,
            opcoes: {
                a: "Uma instalação de rede lógica otimiza a comunicação entre dispositivos.",
                b: "A instalação de uma rede lógica aumenta significativamente o consumo de energia.",
                c: "A instalação de uma rede lógica aumenta significativamente o consumo de energia.",
                d: "Uma rede lógica, apesar de possibilitar uma redução de custos e fácil manutenção, não oferece segurança aos dados armazenados e transmitidos."
            },
            correta: "a"
        },
        {
            nivel: "Fácil",
            pergunta: "Quais os componentes presentes nas instalações de rede de lógica?",
            numero: 3,
            opcoes: {
                a: "Cabos de rede, conectores, tomadas, painéis de patch, switches, roteadores e servidores são componentes comuns em instalações de rede de lógica.",
                b: "Um computador, 	que pode ser conectado diretamente à rede elétrica sem a necessidade de um roteador.",
                c: "Apenas cabos ópticos são utilizados em redes de lógica.",
                d: "Apenas cabos ópticos ligados a roteadores e switches são o necessário nas instalações de rede de lógica."
            },
            correta: "a"
        },
        {
            nivel: "Médio",
            pergunta: "Sobre tratamento de esgoto, selecione a correta:",
            numero: 4,
            opcoes: {
                a: "O tratamento de esgoto geralmente é dividido em quatro etapas principais: tratamento preliminar, tratamento primário, tratamento secundário e tratamento terciário.",
                b: "O tratamento de esgoto se limita apenas à remoção de sólidos.",
                c: "O tratamento de esgoto tem como objetivo principal a reutilização da água para consumo humano.",
                d: "O tratamento terciário é obrigatório em todas as estações de tratamento de esgoto."
            },
            correta: "a"
        },
        {
            nivel: "Médio",
            pergunta: "Qual a ordem correta da complexidade das instalações elétricas? ",
            numero: 5,
            opcoes: {
                a: "Residencial < Comercial < Industrial",
                b: "Industrial < Residencial < Comercial",
                c: "Industrial < Comercial = Residencial",
                d: "Residencial = Comercial = Industrial"
            },
            correta: "a"
        },
        {
            nivel: "Médio",
            pergunta: "Qual norma brasileira estabelece as condições para instalações elétricas, visando garantir a segurança de pessoas e bens?",
            numero: 6,
            opcoes: {
                a: "NBR 5410",
                b: "NR-15",
                c: "ABNT NBR 14039",
                d: "IEC 60364"
            },
            correta: "a"
        },
        {
            nivel: "Médio",
            pergunta: "Qual a definição de instalação hidráulica? ",
            numero: 7,
            opcoes: {
                a: "Um conjunto de tubulações, conexões, equipamentos e dispositivos utilizados para captar, transportar, armazenar e distribuir água em uma edificação, incluindo sistemas de abastecimento, esgoto e águas pluviais.",
                b: "Um sistema de tubulações utilizado exclusivamente para a distribuição de água quente em uma edificação.",
                c: "Um conjunto de equipamentos utilizados para o tratamento de água potável.",
                d: "Um conjunto de equipamentos utilizados para o tratamento de água potável."
            },
            correta: "a"
        },
        {
            nivel: "Difícil",
            pergunta: "Qual(is) o(s) tubo(s) mais utilizado(s) para a distribuição de água quente?",
            numero: 8,
            opcoes: {
                a: "Tubos CPVC, PPR e PEX são comumente utilizados para a distribuição de água quente em instalações hidráulicas.",
                b: "Tubos de PVC comum são os mais indicados para água quente devido ao seu baixo custo.",
                c: "Tubos de ferro galvanizado são a melhor opção para água quente por sua durabilidade.",
                d: "Tubos de polietileno de baixa densidade (PEAD) são ideais para água quente devido à sua flexibilidade."
            },
            correta: "a"
        },
        {
            nivel: "Difícil",
            pergunta: "Qual das opções abaixo descreve corretamente a classificação dos sistemas de água fria?",
            numero: 9,
            opcoes: {
                a: "Os sistemas de água fria podem ser classificados em diretos, indiretos e mistos, cada um com suas características e aplicações específicas.",
                b: "Todos os sistemas de água fria são exclusivamente diretos, ou seja, a água é fornecida diretamente da rede pública para os pontos de consumo.",
                c: "A classificação dos sistemas de água fria depende exclusivamente da pressão da água na rede pública.",
                d: "A classificação dos sistemas de água fria leva em consideração apenas o material utilizado nas tubulações, como PVC, cobre ou ferro."
            },
            correta: "a"
        },
        {
            nivel: "Difícil",
            pergunta: "Sobre instalações de águas pluviais, selecione o correto:",
            numero: 10,
            opcoes: {
                a: "As instalações de águas pluviais utilizam diversos materiais como PVC, ferro fundido, cobre e alumínio, além de estratégias como calhas, condutores, caixas de inspeção e sistemas de drenagem para coletar, conduzir e direcionar a água da chuva.",
                b: "A água da chuva deve ser misturada à rede de esgoto sanitário para otimizar o sistema de tratamento.",
                c: "As caixas de inspeção em sistemas de águas pluviais servem apenas para acumular a água da chuva.",
                d: "O único material adequado para calhas é o ferro fundido devido à sua durabilidade."
            },
            correta: "a"
        },
    ];

    const botaoIniciar = document.getElementById("start-quiz");
    const nomeUsuarioInput = document.getElementById("nome-usuario");
    let nomeUsuario = '';
    let perguntaSelecionada = '';
    let questaoAtual = 0;
    let respostasSelecionadas = {};
    let perguntasFeitas = {};

    const barraProgresso = document.getElementById("barra");
    const nivelTexto = document.getElementById("nivel-texto");
    const perguntaTexto = document.getElementById("pergunta-texto");
    const opcoesContainer = document.getElementById("opcoes");
    const botaoSubmit = document.getElementById("submit");
    const nivelDiv = document.getElementById("nivel");
    const lossDiv = document.getElementById("loss");
    const victoryDiv = document.getElementById("victory");
    const botaoRetry = document.getElementById("retry");
    const botaoRetryvictory = document.getElementById("retry-victory");

    botaoIniciar.addEventListener("click", () => {
        nomeUsuario = nomeUsuarioInput.value.trim();
        if (nomeUsuario === "") {
            showModal("Por favor, insira seu nome para começar o quiz.");
        } else {
            iniciarQuiz();
        }
    });

    function randomizarPergunta(perguntas, perguntasFeitas) {
        const restantes = perguntas.filter(pergunta => !Object.values(perguntasFeitas).includes(pergunta));

        if (restantes.length === 0) {
            return null;
        }

        const indexSelecionada = Math.floor(Math.random() * restantes.length);
        return restantes[indexSelecionada];
    }

    function showModal(message) {
        // Cria o elemento do overlay do modal
        const modalOverlay = document.createElement("div");
        modalOverlay.className = "modal-overlay";
  
        // Cria o conteúdo do modal
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.innerHTML = `
          <p>${message}</p>
          <button id="closeErrorModal">Fechar</button>
        `;
  
        // Adiciona o conteúdo ao overlay
        modalOverlay.appendChild(modalContent);
  
        // Adiciona o modal ao body
        document.body.appendChild(modalOverlay);
  
        // Torna o modal visível
        setTimeout(() => {
          modalOverlay.classList.add("active");
        }, 10);
  
        // Fecha o modal ao clicar no botão
        const closeErrorButton = modalContent.querySelector("#closeErrorModal");
        closeErrorButton.addEventListener("click", () => {
          modalOverlay.classList.remove("active");
          setTimeout(() => {
            modalOverlay.remove();
          }, 300);
        });
  
        // Fecha o modal ao clicar fora do conteúdo
        modalOverlay.addEventListener("click", (event) => {
          if (event.target === modalOverlay) {
            modalOverlay.classList.remove("active");
            setTimeout(() => {
              modalOverlay.remove();
            }, 300);
          }
        });
      }

    function iniciarQuiz() {
        const divIniciar = document.getElementById("intro");
        const divQuiz = document.getElementById("quiz");
        divIniciar.style.display = "none";
        divQuiz.style.display = "flex";
        renderizarQuestao();
    }

    function renderizarQuestao() {
        perguntaSelecionada = randomizarPergunta(perguntas, perguntasFeitas);
        if (!perguntaSelecionada) {
            finalizarQuiz();
            return;
        }
        perguntasFeitas[questaoAtual] = perguntaSelecionada;
        botaoSubmit.style.display = "block";

        nivelTexto.textContent = `Nível: ${perguntaSelecionada.nivel}`;
        perguntaTexto.textContent = `${perguntaSelecionada.pergunta}`;
        opcoesContainer.innerHTML = "";

        switch (perguntaSelecionada.nivel) {
            case "Fácil":
                nivelDiv.style.backgroundColor = "#045c08"; // Verde
                break;
            case "Médio":
                nivelDiv.style.backgroundColor = "#FFA500"; // Laranja
                break;
            case "Difícil":
                nivelDiv.style.backgroundColor = "#dd1212"; // Vermelho
                break;
            default:
                nivelDiv.style.backgroundColor = "#09b12e"; // Verde padrão
        }

        const opcoesEmbaralhadas = Object.entries(perguntaSelecionada.opcoes)
            .sort(() => Math.random() - 0.5);

        opcoesEmbaralhadas.forEach(([letra, texto]) => {
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "questao";
            input.value = letra;
            input.id = `opcao-${letra}`;

            const label = document.createElement("label");
            label.htmlFor = `opcao-${letra}`;
            label.classList.add("opcao-label");
            label.textContent = texto;

            input.addEventListener("change", () => {
                document.querySelectorAll(".opcao-label").forEach(label => {
                    label.classList.remove("select");
                });
                label.classList.add("select");
            });

            opcoesContainer.appendChild(input);
            opcoesContainer.appendChild(label);
            //temporizador()
        });
    }

    function temporizador() {
        let nivel = perguntaSelecionada.nivel;
        let valorContagem = 0;
        let tempoTotal;

        if (nivel === "Fácil") {
            tempoTotal = 30;
        } else if (nivel === "Médio") {
            tempoTotal = 25;
        } else if (nivel === "Difícil") {
            tempoTotal = 20;
        } else {
            alert("Nível Inválido!");
            return;
        }

        barraProgresso.style.backgroundColor = nivelDiv.style.backgroundColor;
        barraProgresso.style.width = "100%";

        const intervalo = setInterval(() => {
            valorContagem++;
            const tempoRestante = tempoTotal - valorContagem;

            const largura = (tempoRestante / tempoTotal) * 100;
            barraProgresso.style.width = `${largura}%`;

            if (tempoRestante <= 0) {
                clearInterval(intervalo);
                barraProgresso.style.width = "0%";
                finalizarQuiz();
            }
        }, 1000);

        botaoSubmit.onclick = function() {
            clearInterval(intervalo);
            proximaQuestao();
        };
    }

    function proximaQuestao() {
        const opcaoSelecionada = document.querySelector('input[name="questao"]:checked');
        respostasSelecionadas[questaoAtual] = opcaoSelecionada.value;
        const perguntaSelecionada = perguntasFeitas[questaoAtual];
        const questao = perguntaSelecionada;

        if (!opcaoSelecionada) {
            alert("Por favor, selecione uma resposta!");
            return;
        }

        if (opcaoSelecionada.value === perguntaSelecionada.correta) {
            questaoAtual++;
            if (questaoAtual < perguntas.length) {
                renderizarQuestao();
            } else {
                finalizarQuiz();
            }
        } else {
            showModal("Você errou!");
            finalizarQuiz();
        }
    }

    botaoSubmit.addEventListener("click", proximaQuestao);

    function finalizarQuiz() {
        // Código para finalizar o quiz
        let pontuacao = 0;
        perguntas.forEach((questao, index) => {
            if (respostasSelecionadas[index] === questao.correta) {
                pontuacao++;
            }
        });

        if (pontuacao === perguntas.length) {
            victoryDiv.style.display = "block";
            victoryDiv.querySelector("img").style.display = "block"; // Mostra o GIF de vitória
            
        } else {
            lossDiv.style.display = "block";
            lossDiv.querySelector("img").style.display = "block"; // Mostra o GIF de perda
        }

        document.getElementById("quiz").style.display = "none"; // Esconde o quiz
    }

    botaoRetry.addEventListener("click", () => {
        lossDiv.style.display = "none";
        resetarQuiz();
    });

    botaoRetryvictory.addEventListener("click", () => {
        victoryDiv.style.display = "none";
        resetarQuiz();
    });

    function resetarQuiz() {
        questaoAtual = 0;
        respostasSelecionadas = {};
        perguntasFeitas = {};
        document.getElementById("quiz").style.display = "flex";
        renderizarQuestao();
    }
})
