# cursoReactUdemy
Repository created to save my React course that I'm taking on Udemy;

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
