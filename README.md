<div align="center">

<h1 align="center">Rocketools Clear DM</h1>

<img src="https://github.com/myersdc/Rocketools-Clear-DM/blob/master/scr/img/rocketoolsz.png" alt="Rocketools DM Clear"/>


<br><br>

<p>
  <strong>O Rocketools DM Clear é um script em JavaScript projetado para automatizar a limpeza de mensagens em uma DM do Discord. Ele utiliza a biblioteca <code>discordjs-selfv11</code> para interagir com a API do Discord.</strong>
</p>

</div>

<!-- Badges -->
![Versão do Projeto](https://img.shields.io/badge/version-2.0-blue.svg)
![Status de Construção](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Licença](https://img.shields.io/badge/license-MIT-blue.svg)

## Funcionalidades

- Limpeza automatizada de mensagens em uma DM do Discord.
- Interface de usuário amigável com arte ASCII.
- Configuração simples por meio do arquivo `config.json`.
- Inicialização automática através do arquivo `start.bat`.

## Requisitos

- Node.js: Certifique-se de ter o Node.js instalado em seu sistema. [Baixe aqui](https://nodejs.org/).
- Conta no Discord: Necessário para obter o token do bot.

## Instalação

1. Clone este repositório ou faça o download do arquivo ZIP clicando no botão "Code" acima.
    ```sh
    git clone https://github.com/myersdc/Rocketools-Clear-DM.git
    cd Rocketools-Clear-DM
    ```
2. Instale as dependências necessárias:
    ```sh
    npm install
    npm install discord.js
    ```

## Configuração

1. Abra o arquivo `config.json` em um editor de texto.
2. Preencha as informações necessárias no arquivo `config.json`:
    - `token`: O token da sua conta do Discord.
    - `trigger`: O comando de gatilho para iniciar a limpeza.

## Uso

1. Inicie o script executando o arquivo `start.bat`:
    ```sh
    start.bat
    ```
2. O script carregará e limpará as mensagens de acordo com as configurações fornecidas no arquivo `config.json`.
3. Após a inicialização, digite o comando de gatilho no chat da DM do Discord para iniciar o processo de limpeza das mensagens.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar problemas, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Avisos de Segurança

- Use este script apenas em DMs que você tem permissão para limpar.
- Não compartilhe seu token do bot publicamente.

## FAQ

**Como obtenho o token do meu bot?**
- Como obter o token da minha conta: [Comunidade de suporte Discord](https://discord.gg/ghxstore).

**Posso usar este script em servidores?**
- Este script é projetado para DMs e pode não funcionar corretamente em canais de servidores.

## Autor

[Vasiliev](https://github.com/myersdc)

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
