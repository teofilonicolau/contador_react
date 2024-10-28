# Contador com Mensagens de Ciclo de Vida

Este projeto é um contador desenvolvido em React utilizando Vite. O componente permite ao usuário incrementar, decrementar e resetar o valor do contador, além de exibir mensagens específicas no console em cada fase do ciclo de vida do componente.

## Objetivo

O objetivo deste projeto é criar um componente de classe React chamado `Contador`, que:

- Permita ao usuário incrementar, decrementar e resetar o valor do contador.
- Exiba mensagens específicas no console durante as fases de montagem, atualização e desmontagem.
- Não permita que o contador vá abaixo de zero.
- Exiba um alerta quando o valor do contador for um múltiplo de 5.
- Imponha um limite máximo para o contador, desativando o botão de incremento quando o valor atinge esse limite.

## Funcionalidades

- **Estado Inicial:** O contador começa com um valor de `0`.
- ![image](https://github.com/user-attachments/assets/12007cca-9d3f-4b0c-88c9-e99c0b840e61)

- **Botões:**
  - **Incrementar:** Aumenta o valor do contador em `1`.
  - ![image](https://github.com/user-attachments/assets/798a14e7-f027-4392-86f9-8e2b5119d5ff)

  - **Decrementar:** Diminui o valor do contador em `1` (não permite valores negativos).
  - ![image](https://github.com/user-attachments/assets/4bc485c0-f7f7-44f2-841c-537b15a57711)

  - **Resetar:** Redefine o valor do contador para `0`.
  - ![image](https://github.com/user-attachments/assets/7c6f5b1c-8296-44c1-ae85-76696027d59b)

- **Mensagens no Console:**
  - **Montagem:** "Componente montado!" é exibido no console quando o componente é montado.
  - **Atualização:** "Contador atualizado!" é exibido no console quando o componente é atualizado.
  - **Desmontagem:** "Componente será desmontado!" é exibido no console quando o componente é desmontado.
- **Validação:** O botão de decremento é desativado quando o contador é `0`.
- **Alerta:** Um alerta é exibido quando o valor do contador é um múltiplo de `5`.
- **Limite Máximo:** O contador não pode exceder `10`, e o botão de incremento é desativado nesse caso.

## Tecnologias Utilizadas

- React
- Vite
- CSS

## Estrutura do Projeto

```
   /contador-vite │ ├── /public │ └── index.html │ ├── /src │ ├── App.jsx │ ├── Contador.jsx │ ├── Contador.css │ └── main.jsx │ ├── package.json └── README.md

```
## Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/teofilonicolau/contador_react.git
   
    ```
2. **Navegue até o diretório do projeto:**

  ```
cd contador_react

  ```
3. **Instale as dependências:**

  ```
npm install

  ```
4. **Execute o projeto:**

   ```
   npm run dev

   ```
5. **Acesse o projeto em seu navegador:**

- Abra o : http://localhost:5173/ no seu navegador.

## Contribuição
 - Se você deseja contribuir com o projeto, sinta-se à vontade para abrir um issue ou enviar um pull request.
   



