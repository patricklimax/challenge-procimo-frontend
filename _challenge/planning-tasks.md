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
-- [x] stations da network clicada
-- [x] voltar para camada anterior

-- Ao clicar na Network
---- [x] Mostrar as estações da Network

# ○ L2: Número de estações, por rede;

-- [x] exibição no Popup e Tooltip

-- Ao Passar o mouse na Station
----Mostrar o nome da Station e Network que pertece #Não precisa

○ L3: Detalhes da estação.
-- Ao clicar na Station
----[x]Mostrar detalhes da Station

##### PENDENTE ##### PRÓXIMA TAREFA

● Permita que o usuário faça uma busca detalhada, de L1 a L3, clicando nos marcadores.
--[x] criar sistema de busca
----[x] pesquisar por: cidade | network | station (por estação não)
----[x] gerar lista de sugestões
----ao clicar numa sugestão
------[x] dar zoom no mapa
------[x] centralizar mapa com as coordenadas da city/rede
------[x] mostrar as estações
------[x] as funcionalidade da station devem estar disponíveis

# semelhante ao da CityBikes

[X] ● Permita que o usuário volte para a camada anterior.

# Tecnologias

[x] Vite + React + Typescript
[x] Axios
[x] Zustand
[x] React-Leaflet
[X] clxs
[x] Tailwind
[x] Biome
[x] Prettier
[x] Plugin Prettier Tailwind
[x] tabler icons | phosphor icon

# Componenents Gerais

-- Header
----[x] nome do desafio
----link do repositório
----link para manual do usuário

-- [x] Mapa
-- [x] Markers
-- [x] Error
-- [x] Loading
-- [x] Button
-- [x] Info
-- [x] ClickToMore

-- Manual do Usuário (se der)
----[x] criar manual do usuário, descrever funcionalidade, icones, etc.

-- Footer
----[x] <p>Desenvolvedor Patrick Lima</p>
----linkar para meu portfólio

hooks
[x] useFirstNetworkCountry:
// pegar a primeira network de cada país
// pegar a quantidade de networks de cada país

stores
[x] useNetworksStore
// pega as networks e salva no store para gerenciar informações

[x] useNetworksIDStore
// pega uma network pelo id e salva no store para gerenciar informações
// pega a quantidade de station de uma network
// pega as stations da network selecionada
// seta a network do id

###### // TODO - PENDENTE

-- [x] sistema de busca
-- Modal com as informações da network
-- Modal com a quantidade de Stations da Network
-- [x] Manual do usuário
-- [x] link do repositório
--

###### // TODO

#### Etapas

[x] criação do projeto
[x] criar planejamento do projeto
[x] instalar dependências
[] criar componentes
[] criar testes (se der)
[] criar build
[] criar testes (se der)
[] implantar
[] finalizar e entregar

##### TESTAR

Chamada da api para pegar as networks - estado inicial - loading - erro
Chamada da api para pegar as networks por id

InputSearch - sim
Mapa - sim
Header - sim
Error
Footer
Loading
Markers
UserManual
