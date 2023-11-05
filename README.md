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
- Execute o comando `cd cliente` e digite: `npm install`.

# Como rodar o projeto:
Com as dependências instaladas, siga os seguintes passos:
- Certifique-se que o docker está rodando na sua máquina.
- Abra 3 terminais, um para o banco de dados com o docker, um para o server e outro para o cliente.
- No primeiro terminal dê os seguintes comandos:
```bash
mkdir /tmp/mysql-data
docker run --name basic-mysql --rm -v /tmp/mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=ANSKk08aPEDbFjDO -e MYSQL_DATABASE=testing -p 3307:3306 -it mysql:8.0
```
- No segundo terminal: `node server.js`.
- No terceiro terminal: `cd cliente` e `npm start`.

# Endpoints da API:
O projeto fornece os seguintes endpoints para auxiliar na gestão de veículos:
- Um verbo POST para adicionar um novo veículo em `/adicionaVeiculo`:
  
![image](https://github.com/RodrigoSantos21/Desafio-RentCars/assets/106289934/743f397e-6d65-4ee7-bb98-66a161c7fbd2)

- Um verbo GET para retornar todos os veículos criados em `/veiculos`:
  
![image](https://github.com/RodrigoSantos21/Desafio-RentCars/assets/106289934/7dc7b369-2103-473c-9fb1-6c028424e9c6)

- Um verbo GET para detalhar um veículo com base no seu ID em `/veiculo/id` ou pelo botão 'Detalhar>' ao retornar todos os veículos:

![image](https://github.com/RodrigoSantos21/Desafio-RentCars/assets/106289934/ade8857d-433a-4870-bc21-ec6fbd5bb154)

- Um verbo PUT para editar as informações de um veículo em `/veiculos/atualiza/id` ou pelo botão "Editar" ao detalhar um veículo:

![image](https://github.com/RodrigoSantos21/Desafio-RentCars/assets/106289934/69fbac88-576a-43b1-a744-bdfe32fbf0e2)

- Um verbo DELETE para deletar um veículo com base no ID pelo botão deletar ao detalhar um veículo pelo ID:

![image](https://github.com/RodrigoSantos21/Desafio-RentCars/assets/106289934/8ec75ded-7153-4b19-9eba-8eceefc483ea)
