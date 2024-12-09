Planejamento e Tarefas do Projeto

Certifique-se de que todas as dependências estejam instaladas e usando versões suportadas
Certifique-se de que o CSS do Leaflet esteja carregado -> pegar css
Certifique-se de que seu contêiner de mapa tenha uma altura definida -> definir altura

Nas coordenadas pode ser usado: latLng(<Number> latitude, <Number> longitude, <Number> altitude?)

# ○ L1: Número de redes, por país;
-- [x] Renderizar mapa inicial
-- [x] Mostrar todas as networks
-- [x] Ao passar o mouse na Network
-- [x] Mostrar o nome da network, país, n. de networks do país

##### mudança
-- usar o zustand para gerenciar o estado, networks, stations, etc.
-- agrupar networks por país
-- [x] Não mostrar todas as networks inicialmente
-- com o agrupamento
-- [NO] pegar o ponto médio das coordenadas das networks do país, ou...
-- [x] pegar uma networks aleatória para representar o país
-- [x] mostrar nessa network a quantidade de networks do país
##### AO PASSAR O MOUSE MOSTRA A QDE DE NETWORKS DO PAÍS
Assim a Tarefa L1: Número de redes, por país, fica resolvida
-- [x] ao clicar nessa pin de agrupamento:
-- [x] esconde esse pin de agrupamento
-- [x] da zoom no mapa
-- [x] mostra as networks do país da network clicada
-- botão para:
-- stations da network clicada
-- [x] voltar para camada anterior

-- Ao clicar na Network
---- Mostrar as estações da Network

# ○ L2: Número de estações, por rede;
-- Modal com a quantidade de Stations da Network 

-- Ao Passar o mouse na Station
----Mostrar o nome da Station e Network que pertece

○ L3: Detalhes da estação.
-- Ao clicar na Station
----Mostrar detalhes da Station

● Permita que o usuário faça uma busca detalhada, de L1 a L3, clicando nos marcadores.
--criar sistema de busca
----pesquisar por: cidade | network | station
----gerar lista de sugestões
----ao clicar numa sugestão
------dar zoom no mapa, centralizar mapa com as coordenadas da city/rede/estação
------as funcionalidade da station devem estar disponíveis

##### criar
● Permita que o usuário volte para a camada anterior.

# Tecnologias
[x] Vite + React + Typescript
Axios
Zustand
React-Leaflet
[x] Tailwind
[x] Biome
[x] Prettier
[x] Plugin Prettier Tailwind
[x] tabler icons | phosphor icon

# Componenents Gerais
-- Header
----nome do desafio
----link do repositório
----link para manual do usuário

-- Mapa

-- Manual do Usuário (se der)
----criar manual do usuário, descrever funcionalidade, icones, etc.

-- Footer
----<p>Desenvolvedor Patrick Lima</p>
----linkar para meu portfólio


#### Etapas
[x] criação do projeto
[x] criar planejamento do projeto
[x] instalar dependências
[] criar componentes
[] criar build
[] criar testes (se der)
[] implantar
[] finalizar e entregar
