# Desafio-RentCars
Repositório para o Desafio de Estágio da RentCars 2023. A proposta deste desafio é criar um aplicativo CRUD (Create, Read, Update, Delete) permitindo a gestão de veículos em uma locadora de carros, portanto será possível: adicionar um novo veículo, retornar a lista de todos os veículos e com base em um ID de veículo: mostrar suas informações detalhadas, editar suas informações e deletá-lo da base de dados.

# Requisitos para rodar o projeto:

### Windows:
- [Node LTS](https://nodejs.org/en)
  
- [Docker](https://docs.docker.com/desktop/install/windows-install/)

### Linux:
- Node LTS:
  - Use o comando `sudo apt-get install nodejs`.

- NPM (node package manager):
  - Use o comando `sudo apt install npm`.

- [Docker](https://dev.to/0xkoji/install-docker-on-wsl2-2ma5)

# Instalando dependências:

- Ao clonar o repositório usando `git clone git@github.com:RodrigoSantos21/Desafio-RentCars.git` ou baixando os arquivos diretamente pelo GitHub, e vá até a pasta criada com `cd "Pasta criada"`.
- No diretório atual, digite: `npm install mysql sequelize express nodemon`.
- Vá para a pasta cliente e digite: `npm install`.

# Como rodar o projeto:

- Abra 3 terminais, um para o banco de dados com o docker, um para o server e outro para o cliente.
- No primeiro terminal dê os seguintes comandos:
```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```
- No segundo terminal: `node server.js`.
- No terceiro terminal: `cd cliente` e `npm start`.