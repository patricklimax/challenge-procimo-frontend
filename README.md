# Olá, eu sou Patrick! 👋

## E este é o repositório do Desafio Front-end Procimo...

# Visão geral

Projeto desenvolvido como solução do Desafio Front-end da empresa Procimo.

## Resumo do Desafio:

Criar um aplicativo da web, usando ReactJS para visualizar dados geolocalizados recuperados da API CityBikes.<br />

## Objetivos do Projeto:<br />

-- Criar um aplicativo web usando ReactJS;<br />
-- Buscar dados da API CityBikes: http://api.citybik.es/v2/;<br />
-- Mostrar os dados em um mapa com 3 camadas diferentes: <br />
● L1: Número de redes por país; <br />
● L2: Número de estações por rede; <br />
● L3: Detalhes da estação, ao clicar em uma estação;<br />
-- Permitir que o usuário faça uma busca detalhada de L1 a L3, clicando nos marcadores.<br />
-- Permitir que o usuário volte para a camada anterior.<br />
-- Definição de pronto:<br />

## Definição de concluído

Documente seu projeto: instruções sobre como executar, como testar e como construir otimizado para produção.

## Planejamento do projeto:

Projeto foi arquitetado usando o mapa de atividades abaixo:

### Layout inicial do projeto

[x] Componete Header, contendo:<br />
--- [x] Nome do desafio<br />
--- [x] Mensagem de boas vindas;<br />
--- [x] Link para repositório github do projeto<br />
--- [x] Link para Manual do Usuário<br />
[x] Componente Mapa <br />
[x] Marcador de País/Grupo<br />
[x] Marcador de Network<br />
[x] Marcador de Station<br />
[x] Componente Manual do Usuário <br />
[x] Componente Footer <br />

### Aplicação Inicial

[x] Exibir mapa com react-leaflet e leaflet;<br />
[x] Exibir, no mapa, marcadores por país mostrando a quantidade de redes por país<br />

#### ○ L1: Número de redes, por país;

# NO MARCADOR GRUPO/PAÍS:

### Evento hover:

[x] Exibição do componente Tooltip, do react-leaflet, com o país e a quantidade de redes do país;<br />

### Evento click:

[x] Exibição das Networks do país, atráves dos seus marcadores;<br />
[x] Zoom no mapa, centralizando com as coordenadas da Network clicada;<br />

# NA NETWORK:

### Evento hover:

[x] Exibição do componente Tooltip, do react-leaflet, com o nome da Network;<br />

### Evento click:

[x] Exibição do componente PopUp, do react-leaflet, com o nome da Network e a quantidade de Stations da Network clicada;<br />

#### ○ L2: Número de estações, por rede;

[x] Exibição do botão "See Stations". Ao clicar é aplicado Zoom no mapa com centralização do mapa com as coordenadas da Network clicada, e exibição dos Marcadores das Stations pertecentes a Network clicada; <br />
[x] Exibição do botão "Back To Group". Ao clicar, reseta o mapa para o estado inicial, exibindo os Marcadores de País;<br />

#### ● Permita que o usuário volte para a camada anterior.

# NA ESTAÇÃO:

### Evento hover:

[x] Exibição do componente PopUp, do react-leaflet, com o nome da Station;<br />

### Evento click:

[x] Exibição do componente PopUp, do react-leaflet, com os detalhes da Station clicada;<br />

#### ○ L3: Detalhes da estação.

[x] Exibição do botão "Back Networks". Ao clicar, reseta o mapa para o estado de exibição dos Marcadores de Networks;<br />

#### ● Permita que o usuário volte para a camada anterior.

# Sistema de Busca:

#### ● Permita que o usuário faça uma busca detalhada, de L1 a L3, clicando nos marcadores.

[x] Sistema de busca via Input. Sendo a busca realizada pelo nome da Cidade ou nome da Network;<br />
[x] Inserindo o termo da busca é renderizado uma lista com os nomes que contém o termo da busca, no formato: Network - Cidade;<br />
[x] Ao clicar na opção deseja: é aplicado zoom no mapa, centralizado com as coordenadas da Network e exibe os Marcadores das Stations;<br />
[x] Ao clicar no Icon X, inserindo no Input, reseta o mapa para o estado inicial;<br />

#### ● Permita que o usuário volte para a camada anterior.

# Tecnologias Utilizadas

● React + TypeScript + Vite;<br />
● React Leaflet;<br />
● Leaflet;<br />
● Axios;<br />
● Zustand;<br />
● Tailwind;<br />
● Phosphor Icon;<br />

# Componentes

### Header

Este Componente exibe as boas vinda ao desafio, o nome do desafio e um sistema de navegação de links com o link para o repositório do projeto e redirecionamento para seção do UserManual.

### App

Responsável por receber os componetes de Map e User Manual.

### Mapa

Este Componente é responsável por exibir a interface principal do mapa, exibir as coordenadas geográficas de cada rede, estação de acordo com a interação do usuário. Bem como as mensagens de carregamento e erro.

### Loading

Este Componente mostra uma mensagem de carregamento, sempre que os dados são carregados na tela, e depois dos dados carregados, exibe uma mensagem com a quantidade de redes da api CityBik.

### Error

Exibe a mensagem em caso de erro dos dados da api.

### InputSearch

Componente de Input responsável pela busca de Networks e Estação, usando o nome da Network ou cidade.

### Markers

Este Componente agrupa outros três componentes: </br>
MarkerGroup: renderiza Marcador no mapa referente ao País que possí Network;</br>
MarkerNetwork: renderiza Marcador no mapa referente as Networks;</br>
MarkerStation: renderiza Marcador no mapa referente as Stations;</br>

### UserManual

Componente responsável por exibir um manual simplificado sobre a aplicado voltado para o usuário. Este componente é composto por outros pequenos componentes para facilitar a manutenção.

### Button

Componente de botão reutilizável usando na aplicação.

### ClickToMore

Componente com estilização e uso não modificável.

### Info

Componente usado para exibir informações nos PopUp das Networks e Stations.

# Diretórios

### api

Usada para armazenar o instância do Axios.

### assets

Guarda os svgs dos Marcadores utilizados.

### hooks

Armazena o hook useFirstNetworkCountry, que agrupa as Netorks por País no objeto "obj: {key: Networks[]}", pega a primeira Network do país e retorna sua informações.

### stores

Armazena os stores: </br>
=> useMarkerGroup: gerencia o estado de exibição do marcador de Group/País;</br>
=> useMarkerNetwork: gerencia o estado de exibição do marcador de Network;</br>
=> useMarkerStation: gerencia o estado de exibição do marcador de Station;</br>
=> useNetworkStore: gerencia o estado de carregamento das Networks, Loading e Erro;</br>
=> useNetworkIDStore: gerencia o estado de carregamento das Networks por ID, Erro e Network Selecionada;</br>
=> useSelectedNetwork: gerencia o estado da Group/País setado para exibição das Networks desse Group/País;</br>

### types

Armazena os types das Netorks e Stations.

## Instalação

Como Rodar o Projeto Localmente

- Clone o repositório:

```bash
  git clone https://github.com/patricklimax/challenge-procimo-frontend.git
```

- Navegue até o diretório do projeto:

```bash
cd [nome-do-projeto]
```

- Instale as dependências:

```bash
npm install
```

- Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

- Acesse o projeto em `http://localhost:5173`

## Rodando os testes (PENDENTE)

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

## Build

Para buildar o projeto, rode o seguinte comando

```bash
  npm run build
```

## Contribuindo

Contribuições são sempre bem-vindas!

Contribuições são bem-vindas! Se você deseja sugerir melhorias ou relatar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License
[MIT](https://choosealicense.com/licenses/mit/)
