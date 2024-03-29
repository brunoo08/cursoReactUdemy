# cursoReactUdemy
Repository created to save my React course that I'm taking on Udemy;
Rpository reference: https://github.com/matheusbattisti/curso_react

======================== O QUE É O REACT ==========================

- REACT É UMA BIBLIOTECA JAVASCRIPT PARA DESENVOLVIMENTO DE APLICAÇÕES FRONT-END;
- ESTAS APLICAÇÕES SÃO CHAMADAS DE spa (SINGLE PAGE APPLICATION);
- A ARQUITETURA É BASEADA EM COMPONENTES;
- PODE SER INSERIDO EM UMA APLICAÇÃO OU PODEMOS CRIAR A APLICAÇÃO APENAS COM REACT;
- É MANTIDO PELO FACEBOOK;

======================== O QUE É O NODE.JS ========================

- O NODE.JS É UMA RUNTIME JAVASCRIPT;
- OU SEJA, UMA BIBLIOTECA UTILIZADA POR UM COMPLIADOR;
- QUE ESTA CONSTRUIDA NA v8 engine (ESCRITA EM C++) DA GOOGLE;
- POSSIBILITANDO CRIAR SOFTWARE EM JS NO LADO DO SERVIDOR;
- TEMOS ENTAO UM CÓDIGO JS RODANDO EM C++ PARA GARANTIR A ALTA PERFORMANCE;

======================== O QUE É O NPM ============================

- O npm É UM GERENCIADOR DE PACOTES DO NODE;
- VAMOS PODER UTILIZAR BIBLIOTECAS DE TERCEIROS, BAIXANDO ELAS PELO npm;
- E TAMBÉM EXECUTAR DETERMINADOS SCRIPTS NO NOSSO PROGRAMA;
- DIFICILMENTE UM SOFTWARE EM NODE.JS NÃO UTILIZA O npm;
- OS MÓDULOS EXTERNOS FICAM EM UMA PASTA CHAMADA node_modules;
- ELA DEVE SER DESCARTAVEL, OU SEJA, A CADA INSTALAÇÃO DO PROJETOS BAIXAMOS TODOS OS PACOTES NOVAMENTE;

======================== INSTALAÇÃO DO NODE =======================

- O DOWNLOAD DO NODE.JS É FEITO PELO SITE OFICIAL: nodejs.org
- VAMOS BAIXAR UM ARQUIVO .msi QUE É O INSTALADOR;
- É INTERESSANTE SABER QUE O npm VEM JUNTO DO NODE;
- APÓS INSTALAÇÃO PODEMOS TESTAR O NODE E O npm EM UM TERMINAL, PARA VALIDAR A INSTALAÇÃO;
    - node -v
    - npm -v
- NOTE QUE OS BINÁRIOS PRECISAM ESTAR NO path, ESTE PASSO ESTA NA INSTALAÇÃO DO NODE;

======================== HELLO WORLD EM REACT =====================

- PARA CRIAR AS NOSSAS APLÇICAÇÕES EM REACT VAMOS UTILIZAR UM EXECUTO DE SCRIPTS DO NODE, QUE É O npx;
- COM O COMANDO:
    - npx create-react-app <nome> 
- TEMOS UMA NOVA APLICAÇÃO SENDO GERADA, PODEMOS INICIAR A APLICAÇÃO COM:
    - npm start;

======================== ESTRUTURA BASE ===========================

- HÁ ALGUMAS PASTAS E ARQUIVOS CHAVES PARA O DESENVOLVIMENTO EM REACT;
    - node_modules: ONDE AS DEPENDENCIAS DO PROJETO FICAM;
    - public: ASSETS ESTÁTICOS E HTML DE INICIALIZAÇÃO;
    - src: ONDE VAMOS PROGAMAR AS NOSSAS APPS;
    - src/index.js: ARQUIVO DE INICIALIZAÇÃO DO REACT;
    - src/App.js: COMPONENTE PRINCIPAL DA APLICAÇÃO;

======================== EMMET ====================================

- emmet É UMA EXTENSÃO NATIVA DO VS CODE QUE AJUDA A ESCREVER HTML MAIS RAPIDO;
- PORÉM ELA NÃO VEM CONFIGURADA PARA O REACT;
- TEMOS QUE ACESSAR:
    - file > settings > extensions > procurar por Emmet
- LÁ, VAMOS INCLUIR A LINGUAGEM: 
    - javascript - javascriptreact

======================== CRIANDO COMPONENTES ======================

- NA MAIORIA DOS PROJETOS OS COMPONENTES FICAM EM UMA PASTA CHAMADA components, QUE DEVEMOS CRIAR;
- GERALMENTE SÃO NOMEADOS COM A camel case: FirstComponent.js;
- NO ARQUIVO, CRIAMOS UMA FUNÇÃO, QUE CONTÉM O CÓDIGO DESTE COMPONENTE;
- E TAMBÉM PRECISAMOS EXPORTAR ESTA FUNÇÃO PARA REUTILIZA-LA;

======================== IMPORTANDO COMPONENTES ===================

- A IMPORTAÇÃO É A MANEIRA QUE TEMOS DE REUTILIZAR O COMPONENTE;
- UTILIZAMOS A SINTAXE: 
    - import X from './components/X'
- PARA COLOCAR O COMPONENTE IMPORTADO EM OUTRO COMPONENTE, PRECISAMOS COLOCA-LO EM FORMA DE TAG
    - < FirstComponent / > (sem espaços)

======================== JSX ======================================

- jsx É O HTML DO REACT;
- ONDE VAMOS DECLARAR AS TAGS DE HMTL QUE SERÃO EXIBIDAS NO NAVEGADOR;
- FICAM NO return DO COMPONENTE;
- TEMOS ALGUMAS DIFERENÇAS DO HTML, POR EXEMPLO: class SERÁ className;
- ISSO SE DA PELAS INSTRUÇÕES SEMELHANTES DE JS E HTML, POIS O jsx É JAVASCRIPT, ENTÃO ALGUMAS TERÃO NOMES DIFERENTES;
- O jsx PODE TER APENAS UM ELEMENTO PAI;

======================== COMENTARIOS NO COMPONENTE ================

- PODEMOS INSERIR COMENTARIOS DE DUAS MANEIRAS:
    - NA FUNÇÃO: //algum comentario
    - NO JSX: {/*algum comentario*/}
- AS CHAVES NOS PERMITEM executar sentenças em JavaScript;

======================== TEMPLATE EXPRESSIONS =====================

- template expressions É O RECURSO QUE NOS PERMITE EXECUTAR js NO jsx E TAMBÉM INTERPOLAR VARIAVEIS;
- A SINTAXE É: {algumCódigoEmJS}
- TUDO QUE ESTA ENTRE CHAVES É PROCESSADO EM JAVASCRIPT E NOS RETORNA UM RESULTADO;

======================== HIERARQUIA DE COMPONENTES ================

- OS COMPONENTES QUE CRIAMOS PODEM SER REUTILIZADOS EM VARIOS COMPONENTES;
- E AINDA, COMPONENTES PODEM FORMAR UMA HIERARQUIA, SENDO IMPORTADOS UNS DENTRO DOS OUTROS;

======================== EVENTOS ==================================

- OS EVENTOS PARA O FRONT-END SÃO ESSENCIAIS;
- EM VARIAS SITUAÇÕES VAMOS PRECISAR DO CLICK, COMO AO ENVIAR FORMULARIOS;
- NO REACT OS EVENTOS JA ESTAO 'PRONTOS', PODEMOS UTILIZAR onClick PARA ATIVAR UMA FUNÇÃO AO CLICAR NUM ELEMENTO;
- ESTA FUNÇÃO PE CRIADA NA PRÓORIA FUNÇÃO DO COMPONENTE;
- AS FUNÇÕES GERALMENTE TEM O PADRÃO: handleAlgumaCoisa;

======================== FUNÇÕES NO EVENTO ========================

- QUANDO AS FUNÇÕES SAO SIMPLES, PODEMOS REALIZAR A LOGICA NO PROPRIO EVENTO;
- ISSO TORNA NOSSO CODIFO MAIS "COMPLICADO" POR ATRALAR LOGICA COM HTML;
- MAS EM ALGUMAS SITUAÇÕES É APLICAVEL;

======================== FUNÇÕES DE RENDERIZAÇÃO ==================

- PODEMOS CRIAR FUNÇÕES QUE RETORNAM jsx;
- ISSO SERVE PARA CRIAR SITUAÇÕES QUE DEPENDEM DE OUTRAS CONDIÇÕES;
- OU SEJA, O jsx A SER RENDERIZADO PODE VARIAR POR ALGUMA VARIAVEL, POR EXEMPLO;

======================== IMAGENS NO REACT =========================

- AS IMAGENS PUBLICAS DO NOSSO PROJETO PODEM FICAR NA PASTA public;
- DE LÁ, ELAS PODEM SER CHAMADAS PELAS TAGS IMG DIRETAMENTE PELO /nome.jpg;
- POIS A PASTA PUBLIC FICA LINKADA COM O SRC DAS IMAGENS;
- UM PADRÃO BEM UTILIZADO É COLOCAR IMAGENS EM UMA PASTA CHAMADA assets, EM src;
- EM assets PRECISAMOS IMPORTARR AS IMAGENS, E O src É DINAMICO COM O NOME DE IMPORTAÇÃO;

======================== HOOKS ====================================

- SÃO RECURSOS DO REACT QUE TEM VARIAS FUNÇÕES;
- COMO:
    - GUARDAR E ALTERAR O ESTADO DE ALGUM DADO NA APLICAÇÃO;
- TODOS OS HOOKS COMEÇAM COM use, POR EXEMPLO, useState;
- PODEMOS CRIAR OS NOSSOS HOOKS, ISSO É CHAMADO DE custom hook;
- OS HOOKS PRECISAM SER IMPORTADOS;
- GERALMENTE SÃO UTEIS EM TODAS AS APLICAÇÕES; 
- O HOOK D useState É UM DOS MAIS UTILIZADOS;
- UTILIZAMOS PARA GERENCIAR O ESTADO DE ALGUM DADO, VARIAVEIS NAO FUNCIONAM CORRETAMENTE, O COMPONENTE NAO RE-RENDERIZA;
- PARA GUARDAR O DADO DEFINIMOS O NOME DA VARIAVEL E PARA ALTERAR VAMOS UTILIZAR O setNome, ONDE NOME É O NOME DO NOSSO DADO;

======================== RENDERIZAÇÃO DE LISTAS ===================

- UMA OUTRA AÇÃO BEM COMUM É renderizar listas DE DADOS NO TEMPLATE;
- FAZEMOS ISSO COM DADOS COM TIPO DE array;
- UTILIZANDOP O métoto map PARA NOS AUXILIAR;
- ALÉM DOS DADOS PODEMOS INSERIR jsx EM CADA ITERAÇÃO;
- ITERAR LISTAS SEM A PROPRIEDADE key NOS GERA UM WARNING NO CONSOLE;
- O REACT PRECISA DE UMA CHAVE UNICA EM CADA UM DOS ITENS ITERADOS;
- ISSO SERVE PARA AJUDA-LO NA RENDERIZAÇÃO DO COMPONENTE;
- GERALMENTE TEMOS UM ARRAY DE OBJETOS E PODEMOS COLOCAR key COMO ALGUMA CHAVE UNICA, COMO O id DE ALGUM DADO;
- EM ULTIMO CASO, DEVEMOS UTILIZAR O INDEX DO METODO map;

======================== PREVIOUS STATE ===========================

- previous state É UM RECURSO QUE NOS PERMITE PEGAR O DADO EM SEU VALOR ORIGINAL DENTRO DE UM SET DE DADO;
- ISSO É MUITO UTILIZADO PARA MODIFICAR LISTAS, POIS TEMOS O VALOR ANTIGO E TRANSFORMAMOS EM UM VALOR NOVO;
- O PRIMEIRO ARGUMENTO DE UM SET SEMPRE SERA O PREVIOUS STATE;

======================== RENDERIZAÇÃO CONDICIONAL =================

- renderização condicional É QUANDO IMPRIMIMOS UMA PARTE DO TEMPLATE BASEADO EM UMA CONDIÇÃO;
- ISSO É INTERESSANTE EM SITUAÇÕES COMO SE O USUARIO ESTA LOGADO OU NAO;

======================== PROPS ====================================

- props É OUTRO RECURSO FUNDAMENTAL DO REACT;
- NOS PERMITE PASSAR VALORES DE UM COMPONENTE PAI PARA UM COMPONENTE FILHO;
- ISSO SERÁ MUITO UTIL QUANDO OS DADOS FOREM CARREGADOS VIA BD;
- AS PROPS VEM EM UM OBJETO NO ARGUMENTO DA FUNÇÃO DO COMPONENTE;
- É MUITO COMIM PASSAR MAIS DE UMA prop EM UM COMPONENTE;
- PARA FACILITAR ISSO, O REACT NOS PERMITE DESESTRUTURAR AS PROPRIEDADES QUE CHEGAM, COM O RECURSO DE DESTRUCTURING;
    - SE TEMOS DUAS PROPS: name e age;
    - PODEMOS FAZER ASSIM: function MyComponent({name, age})
    - ASSIM, NAO PRECISAMOS USAR props.algumacoisa;

======================== REUTILIZAÇÃO DE COMPONENTES ==============

- COM props A REUTILIZAÇÃO DE COMPONENTES COMEÇA A FAZER MUITO SENTIDO;
- SE TEMOS OS DADOS DE 1000 CARROS POR EXEMPLO, PODEMOS REAPROVEITAR O NOSSO CarDetails 1000 vezes;
- ISSO TORNA NOSSO CODIGO MAIS PADRONIZADO, FACILITANDO A MANUTENÇÃO;

======================== REUTILIZAÇÃO COM LOOPS ===================

- OS ARRAYS DE DADOS PODEM TER MUITO ITENS TAMBÉM;
- ENTAO O CORRETO É UTILIZAR UMA ESTRUTURA DE LOOP (map) PARA A SUA EXIBIÇÃO;
- E COM ISSO CONSEGUIMOS CONCILIAR OS TRÊS CONCEITOS: RENDERIZAÇÃO DE LISTAS, REAPROVEITAMENTO DE COMPONENTES E PROPS;

======================== REACT FRAGMENTS ==========================

- OS react fragments SÃO INTERESSANTES PARA QUANDO PRECISAMOS TER MAIS DE UM ELEMENTO PAI EM UM COMPONENTE;
- CRIAMOS UMA TAG VAZIA: <>..</>
- E ELA SERVE COMO ELEMENTO PAI, NAO ALTERANDO A ESTRUTURA DO HTML COM UMA DIV, POR EXEMPLO;

======================== CHILDREN PROPS ===========================

- Children prop É UM RECURSO UTILIZADO PARA QUANDO UM COMPONENTE PRECISA TER jsx DENTRO DELE;
- POREM ESTE jsx VEM DO COMPONENTE PAI;
- ENTÃO O COMPONENTE AGE COMO UM CONTAINER, ABRAÇANDO ESTES ELEMENTOS;
- E CHILDREN É CONSIDERADA UMA PROP DO COMPONENTE;


======================== FUNÇÕES EM PROPS =========================

- AS FUNÇÕES PODEM SER PASSADAS PARA AS PROPS NORMALMENTE;
- BASTA CRIAR A FUNÇÃO NO COMPONENTE PAI E ENVIAR COMO PROP PARA O COMPONENTE;
- NO COMPONENTE FILHO ELA PODE SER ATIVADA POR UM EVENTO, POR EXEMPLO;

======================== ELEVAÇÃO DE STATE ========================

- ELEVAÇÃO DE STATE OU State lift É QUANTO DUM VALOR É ELEVADO DO COMPONENTE FILHO PARA O COMPONENTE PAI;
- GERALMENTE TEMOS UM COMPONENTE QUE USA O STATE E OUTRO QUE ALTERA;
- ENTÃO PRECISAMOS PASSAR A ALTERAÇÃO PARA O COMPONENTE PAI, E ESTE PASSA PARA O COMPONENTE QUE USA O STATE;

======================== CSS GLOBAL ===============================

- O CSS GLOBAL É UTILIZADO PARA ESTILIZAR DIVERSOS ELEMENTOS EM COMUM;
- UTILIZAMOS O ARQUIVO index.css PARA ISSO;

======================== CSS DE COMPONENTE ========================

- O CSS DE COMPONENTE É UTILIZADO PARA UM COMPONENTE EM ESPECIFICO;
- GERALMENTE É CRIADO UM ARQUIVO COM O MESMO NOME DO COMPONENTE E ESTE É IMPORTADO NO COMPONENTE;
- NOTE QUE ESTE METODO NÃO É SCOPED, OU SEJA, O CSS VAZA PARA OUTROS COMPONENTES SE HOUVER UMA REGRA EM COLISÃO;
- O REACT JÁ CRIA UM EXEMPLO DESTA TÉCNICA COM O App.css/js;

======================== CSS INLINE ===============================

- O INLINE STYLE DO REACT É IGUAL O DO CSS;
- DEVEMOS OPTAR POR OUTRAS MANEIRAS DE CSS, O INLINE PODE DIFICULTAR A MANUTENÇÃO OU DEIXAR O CODIGO IMPREVISIVEL EM ALGUMAS SITUAÇÕES;

======================== CSS INLINE STYLE DINAMICO ================

- O CSS DINAMICO INLINE APLICA ESTILO BASEADO EM UMA CONDICIONAL;
- VAMOS INSERIR NO ATRIBUTO UM IF TERNARIO;

======================== CLASSES DINAMICAS NO CSS =================

- PODEMOS TAMBEM APLICAR LOGICA PARA MUDAR A CLASSE DE CSS DE UM ELEMENTO;
- TAMBÉM UTILIZAREMOS O IF TERNARIO;;
- ESSA ABORDAGEM É MAIS INTERSSANTE QUE O CSS INLINE;
- POIS AS CLASSES ESTARAO ISOLADAS NO ARQUIVO DE CSS, RESOLVENDO O PROBLEMA DE ORGANIZAÇÃO DE CÓDIGO;

======================== CSS MODULES ==============================

- O CSS MODULES É UM RECURSO DE CSS SCOPED;
- OU SEJA, ELE VAI SER EXCLUSIVO DO COMPONENTE;
- O NOME DO ARQUIVO É: Componente.module.css;
- PRECISAMOS IMPORTA-LO TAMBEM NO COMPONENTE;

======================== FORMULARIOS EM REACT =====================

- NO REACT VAMOS UTILIZAR A TAG FORM PARA FORMULARIOS;
- AS LABELS DOS INPUTS CONTEM O ATRIBUTO htmlFor, QUE DEVE TER O VALOR DO name DO INPUT;
- NÃO UTILIZAMOS ACTION, POIS O PROCESSAMENTO SERÁ FEITO DE FORMA ASSINCRONA;

======================== LABEL ENVOLVENDO O INPUT =================

- EM REACT UM PADRÃO COMUM É A TAG LABEL ENVOLVENDO O INPUT;
- ISSO FAZ COM QUE O ATRIBUTO FOR SE TORNE OPCIONAL;
- SIMPLIFICANDO NOSSA ESTRUTURA DE HTML, SEM PERDER A SEMANTICA;

======================== MANIPULAÇÃO DE VALORES ===================

- PARA MANIPULAR OS VALORES DOS INPUTS VAMOS UTILIZAR O HOOK useState;
- OU SEJA, PODEMOS ARMAZENAR NA VARIAVEL E UTILIZAR O set PARA ALTERAR O VALOR;
- VAMOS CRIAR UMA FUNÇÃO PARA ALTERAR O VALOR NO EVENTO onChange;
- DEIXANDO O CÓDIGO FACIL DE RABALHAR NAS PROXIMAS ETAPAS COMO NO ENVIO DE DADOS PARA O BD E VALIDAÇÃO;

======================== SIMPLIFICANDO A MANIPULAÇÃO ==============

- QUANDO TEMOS VARIOS INPUTS PODEMOS REALIZAR A MANIPULAÇÃO DE FORMA MAIS SIMPLES;
- BASICAMENTE CRIAMOS UMA FUNÇÃO INLINE NO onChange;
- ELE VAI ALTERAR O VALOR DO STATE COM O METODO SET, DA MESMA FORMA QUE A FUNÇÃO ISOLADA;

======================== ENVIO DE FORMULARIO ======================

- PARA ENVIAR UM FORM VAMOS UTILIZAR O EVENTO onSubmit;
- ELE CHAMARÁ UMA FUNÇÃO, E NESTA, DEVEMOS LEMBRAR DE PARAR A SUBMISSÃO, COM O preventDefault;
- NESTA ETAPA PODEMOS REALIZAR VALIDAÇÕES, EVIO DE FORM PARA O SERVIDOR, RESET DE FORM E OUTRAS AÇÕES;

======================== CONTROLLED INPUTS ========================

- CONTROLLED INPUTS É UM RECURSO QUE NOS PERMITE MAIS FLEXIBILIDADE NOS FORMS DE REACT;
- PRECISAMOS APENAS IGUALAR O VALOR AO STATE;
- UM USO MUITO COMUM: FORMULARIOS DE EDIÇÃO, QUE OS DADOS VEM DO BACKEND, CONSEGUIREMOS PREENCHER O INPUT MAIS FACILMENTE;

======================== LIMPANDO FORMULARIOS =====================

- COM O CONTROLLED INPUTS LIMPAR O FORM SERÁ FACIL;
- BASTA ATRIBUIR UM VALOR DE UMA STRING VAZIA AOS STATES E PRONTO!
- ISSO SERA FEITO APOS O ENVIO, EM FORMULARIOS QUE O USUARIO PRECISA PREENCHER NOVAMENTE;

======================== INPUT TEXTAREA ===========================

- O TEXTAREA PODE SER CONSIDERADO UM INOUT DE TEXTO NORMAL;
- UTILIZAREMOS O VALUE PARA ALTERAR O STATE INICIAL;
- E O EVENTO onChange PARA MODIFICAR O VALOR DO STATE;


======================== INPUT SELECT =============================

- O SELECT TAMBEM SERA MUITO SEMELHANTE AOS OUTROS INPUTS;
- QUANDO TEMOS A ALTERAÇÃO DE UM VALOR O EVENTO onChange PODE CAPTAR ISSO;
- O VALUE TAMBEM PODE ATRIBUIR QUAL OPTION ESTARA SELECIONADA;


======================== useEffect ================================

- O useEffect FAZ COM QUE DETERMINADA AÇÃO SEJA EXECUTADA APENAS UMA VEZ;
- ISSO É INTERESSANTE POIS OS COMPONENTES ESTAO SEMPRE SE re-renderizando, ENTÃO PRECISAMOS TER AÇÕES UNICAS ÀS VEZES;
O useEffect AINDA POSSUI UM ARRAY DE DEPENDENCIAS, QUE DEVE CONTER OS DATOS QUE ATIVEM A EXECUÇÃO DA FUNÇÃO DE FORMA AUTOMATICA;
- O useEffect ESTARÁ PRESENTE SEMPRE NAS REQUISIÇÕES ASSINCRONAS;

======================== RESGATANDO DADOS COM REACT ===============

- PARA TRAZER OS DADOS VAMOS TER QUE UTILIZAR VARIOS RECURSOS;
- PRIMEIRAMENTE TER UM LOCAL PARA SALVA-LOS (useState);
- RENDERIZAR A CHAMADA A API APENAS UMA VEZ (useEffect);
- UM MEIO DE FAZER A REQUISIÇÃO ASSINCRONA (Fetch API);

======================== ADD DADOS COM REACT ======================

- PARA ADICIONAR UM ITEM VAMOS PRECISAR RESGATAR OS DADOS DO FORM COM O useState;
- REUNIR ELES EM UMA FUNÇÃO APÓS O SUBMIT E ENVIAR UM REQUEST DE POST PARA A NOSSA API;

======================== REACT ROUTER =============================

- O React Router É UM DOS PACOTES MAIS UTILIZADOS PARA CRIAR UMA ESTRUTURA DE ROTAS EM APLICAÇÕES DE REACT;
- OU SEJA, PERMITE QUE NOSSAS SPAs TENHAM MULTIPLAS PÁGINAS;
- PRECISAMOS INSTLAR NO NOSSO PROJETO;
- A CONFIGURAÇÃO E UTILIZAÇÃO É SIMPLES;
- TEMOS OUTRAS FUNÇÕES COMO:
    - Redirect, Nested Routes, Not Found Routes, etc;
- PARA CONFIGURAR O REACT ROUTER VAMOS TER QUE IMPORTAR TRES ELEMENTOS DE react-router-dom:
    - BrowserRouter: DEFINE ONDE A AREA DO NOSSO APP QUE VAI TROCAR AS PAGINAS;
    - Routes: DEFINE AS ROTAS;
    - Route: UM ELEMENTO DESTE PARA CADA ROTA, CONFIGURAR COM PATH E COMPONENTE DA ROTA

======================== NESTED ROUTE =============================

- AS NESTED ROUTED INDICAM urls mais complexas COMO?
    - /products/:id/something
- NESTE CASO VAMOS PRECISAR CRIAR UM COMPONENTE QUE CORRESPONDA COM O PADRÃO INDICADO E TEAMBÉM A URL EM APP.JS
- NA NESTED ROUTE TEREMOS O ACESSO AO PARAMETRO DA URL TAMBÉM;

======================== PAGE 404 =================================

- PODEMOS CRIAR UMA PAGINA 404 FACILMENTE COM O REACT ROUTER
- BASTA CRIARMOS O COMPONENTE DA PAGINA E NO ARQUIVO APP.JS DEFINIR UM PATH COMO *;
- DESTA MANEIRA, QUALQUER ROTA QUE NAO EXISTA IRA CAIR NESTE COMPONENTE;

======================== LINK ATIVO ===============================

- PARA TER FACIL ACESSO A UMA MODIFICACAO PARA OS LINKS ATIVOS VAMOS TROCAR O Link PELO NavLink
- NESTE ELEMENTO TEMOS ACESSO A UM VALOR CHAMADO isActive, OU SEJA, PODEMOS ATIVAR UMA CLASSE SE A ROTA ATUAL FOR A QUE ESTA NO ATRIBUTO to;

======================== SEARCH PARAMS ============================

- Search Params É UM RECURSO QUE PERMITE OBTER O QUE VEM NA URL EM FORMA DE PARAMETRO, EXEMPLO:
    - produtos?q=camisa
- UTILIZAMOS O HOOK useSearchParams PARA OBTE-LOS;
- COM ESSE RECURSO FICA SIMPLES FAZER UMA FUNCIONALIDADE DE BUSCA NO SISTEMA;

======================== REDIRECT =================================

- PODEMOS PRECISAR DE UM REDIRECIONAMENTO DE PAGINAS EVENTUALMENTE, POR EXEMPLO UMA PAGINA ANTIGA QUE RESPONDE A UMA OUTRA URL AGORA;
- PARA ISSO VAMOS CRIAR UMA ROTA COM ROUTE NORMALMENTE, MAS EM ELEMENT VAMOS UTILIZAR O COMPONENTE NAVIGATE COM UM TO QUE VAI PARA A ROTA CORRETA;


======================== 