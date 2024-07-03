Estrutura do Projeto

index.html: O arquivo HTML principal do projeto.
assets/reset.css: Arquivo de estilo de reset.
assets/style.css: Arquivo de estilo personalizado.
assets/js/interacaoNotas.js: Script para interação com notas.
assets/js/calculoMedia.js: Script para cálculo da média.
assets/js/function.js: Funções auxiliares.

Instruções de Uso
Abra o arquivo index.html em um navegador.
Digite seu nome no campo "Olá, digite seu nome".
Digite suas notas no campo "Digite sua nota".
Clique em "Adicionar Nota" para adicionar as notas.
Clique em "Calcular Média" para calcular a média das notas inseridas.
A média calculada será exibida no campo "Exibição da média calculada".
As notas inseridas serão exibidas na lista "Lista de notas inseridas".
Documentação Adicional


Detalhes Técnicos

main.js
Responsável por inicializar a janela principal do aplicativo Electron e lidar com eventos do IPC (Inter-Process Communication).

Importações:

app: Inicialização e controle do aplicativo.
BrowserWindow: Criação de janelas do navegador.
Menu: Criação de menus do sistema.
shell: Interação com recursos do sistema, como URLs externas.
ipcMain: Lidar com mensagens IPC enviadas pela janela principal.
path: Manipulação de caminhos de arquivos.

Funções:

createWindow: Cria uma nova instância da janela do navegador.
sobreMenu: Cria uma janela para exibir informações sobre o aplicativo.

Eventos:

app.whenReady: Cria a janela principal quando o aplicativo está pronto.
app.on('window-all-closed'): Encerra o aplicativo quando todas as janelas são fechadas.
ipcMain.on('abrir-janela-sobre'): Cria uma janela com informações sobre o aplicativo ao receber a mensagem "abrir-janela-sobre".

Menus:

Arquivo: Contém a opção "Sair".
Exibir: Opções para recarregar, abrir ferramentas de desenvolvedor e aplicar zoom.
Ajuda: Opções "Documentação" e "Sobre".
index.js
Define eventos e funções para interagir com o usuário e realizar cálculos.

Variáveis:

adicionarNome: Elemento HTML com o ID inNome.
botaoNome: Elemento HTML com o ID calcularMedia.
botaoAdicionarNota: Elemento HTML com o ID adicionarNota.
botaoCalcularMedia: Elemento HTML com o ID calcularMedia.

Eventos:

Clique e teclado para adicionar nome e notas, e calcular a média.
Funções:

adicionarNota: Adiciona uma nota e exibe uma mensagem no console.
calcularMedia: Calcula a média das notas e exibe uma mensagem no console.

interacaoNotas.js
Define funções para interação com as notas no arquivo index.html.

Funções:

adicionarNota: Adiciona uma nota à lista de notas.
removerNota: Remove uma nota da lista de notas.

Elementos HTML:

notaInput: Elemento de entrada de nota (nota).
listaNotas: Elemento de lista de notas (listaNotas).
calculoMedia: Elemento de exibição da média (calculoMedia).
calcularMedia
Calcula a média das notas inseridas pelo usuário.

Passos:

Obtém o nome e a lista de notas.
Calcula a média das notas.
Valida o limite de notas.
Exibe uma mensagem de aprovação/reprovação.
Limpa a lista de notas.

Elementos HTML:

inNome: Elemento de entrada para o nome.
listaNotas: Elemento de lista de notas.
calculoMedia: Elemento de exibição da média e mensagem de aprovação/reprovação.

renderer.js
Adiciona eventos de clique aos elementos "link-sobre" e "fechar-sobre".

Passos:

Obtém o elemento link-sobre.
Adiciona evento de clique para abrir a janela "sobre".
Obtém o elemento fechar-sobre.
Adiciona evento de clique para fechar a janela "sobre".


Projeto desenvolvido por Alex de Abreu 

