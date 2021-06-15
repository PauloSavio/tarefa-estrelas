# tarefa-estrelas
Desafio final do processo seletivo Estrelas


Para começar, eu achei que esse desafio não seria muito diferente do que fizemos em aula. Eu estava certo e errado. Embora a ideia fosse muito parecida, a diferença de objetivo foi grande o bastante para que eu tivesse que procurar bastante coisa.

A parte de HTML foi bem simples. O <head> ficou praticamente igual ao da aula, já que os metadados são os mesmos e apenas o título mudou. Já o <body> mudou bastante: eu decidi dar class e id pra toda section. Não sei se isso é uma prática bem vista mas me ajudou muito a visualizar meus passos e entender onde eu estava errando.
Ainda no HTML, coloquei uma pequena introdução, para não deixar somente a página com os personagens. O jeito que eu encontrei de manter os nomes juntos com as imagens foi a tag <figcaption>. Primeiro eu tentei alinhar as imagens com os nomes só pelo css, criando uma section só de nomes e alinhando com margin e border. Percebi que essa era uma péssima ideia e fui procurar um jeito melhor no google. Achei o <figcaption> que resolveu pra mim. Aqui no HTML eu também adicionei um botão que tem a mesma função do F5, porque eu achei que ficava mais bonitinho.

No CSS eu comecei adicionando um background das cores do logo de Rick and Morty. Processo bem simples, igual ao da aula. Como eu queria que a página toda ficasse centralizada, tentei colocar um main > section com display: flex e justify-content: center para aplicar a todas as sections e deu certo. (antes eu estava aplicando em cada section separadamente). A section h1 (que eu também achei no google) é bem simples, a única coisa a mais foi o contorno das letras. Achei que ficaria bonito e tentei fazer isso com shadow e weight, mas não é assim que funciona. Joguei no google e achei no Fórum do Hardware um pessoal usando isso: 

-webkit-text-stroke-width: 1.5px;
-webkit-text-stroke-color: #000;

Vou confessar que não entendi o que é a parte de webkit, mas o resto é a espessura e cor do contorno (mudei de 1px para 1.5px) e funcionou perfeitamente. No fórum eles disseram que não funcionaria no Edge, mas eu testei aqui e foi tranquilamente. 
Na section de img não tem nada de especial, só defini umas formatações quase iguais às que vimos em aula.
Como não vimos a tag <figcaption>, eu não sabia como ela se comportaria no css e no js, mas funcionou numa boa para formatar. (também adicionei o contorno aqui).
A section do botão também ficou quase igual ao da aula mas eu adicionei um background gradiente porque descobri no W3Schools que dava pra fazer e quis testar. Ficou bonito então eu deixei.

Como eu imaginava, a parte do javascript foi a mais complicada:
Minha primeira ideia foi de já separar todas as constantes que eu precisaria usar (as imagens, os nomes e o botão). Até aqui deu tudo certo e eu estava bem feliz.

No gerarValorAleatorio eu pensei corretamente mas fiz do jeito mais complicado: eu criei quatro funções distintas, cada uma com seu nome, (gerarValorAleatorio2, gerarValorAleatorio3, etc) e coloquei cada uma delas no let dos seus respectivos pegarPersonagem. Funcionou! Mas quando mostrei para um amigo programador, ele me explicou que essa função de gerar número aleatório é executada cada vez que eu a chamo. Ou seja, eu estava achando que a função geraria um número e todos os pegarPersonagem usariam o mesmo número. Isso faria com que todas as imagens e nomes fossem iguais. Agora eu sei que não, cada vez que o pegarPersonagem chama a função, ela roda de novo e gera um novo número. Então eu voltei e deixei só um gerarValorAleatorio. 

O return, method e headers ficou igual ao da aula porque não tem o que mudar mesmo.

Foi aqui que eu tive o maior problema: o response funcionou perfeitamente para pegar a imagem e o alt. O img.src e img.alt não me deram problema. Mas quando eu tentei colocar nome1 = data.name, simplesmente não funcionava e eu não entendia o motivo. Depois de muito pesquisar, descobri que era algo super básico que eu estava esquecendo, de bobeira: o innerHTML. Entendi agora que se você quiser que o javascript escreva alguma coisa no HTML, você precisa usar o innerHTML. O src e alt não precisam porque nada está sendo escrito, só estão buscando e mostrando essas informações.(Pelo menos foi isso que eu entendi). Depois de colocar o nome1.innerHTML, funcionou perfeito e eu fiz o mesmo com os outros 3.

O window.onload eu encontrei no W3 e o botao.onclick foi a mesma coisa da aula. Aqui eu tentei executar separadamente os pegarPersonagem tanto para o refresh como para o botão. Ficou muita coisa e muito feio, então fui procurar ajuda para condensar isso e encontrei (com a ajuda do André) essa função para executar tudo de uma vez. Eu imagino que isso seja bem básico mas demorou um pouco pra eu fazer funcionar.

Uma coisa que eu queria fazer é colocar uma condição (usando if e else) para que as funções nunca pegassem dois números iguais ao mesmo tempo e nunca aparecesse dois personagens repetidos na mesma página. A parte do if (if valorAleatório2 == valorAleatório1) foi bem fácil de entender, porém o resto disso eu procurei no google e encontrei umas explicações absurdamente complicadas, com arrays e mais um monte de coisa. Achei avançado demais para o que foi proposto, então deixei pra lá.

Também não adicionei nenhum outro dado (espécie, planeta) da API porque o método de pegar (data.) é o mesmo do nome e vocês já sabem que eu entendi essa parte, não quis encher linguiça)
