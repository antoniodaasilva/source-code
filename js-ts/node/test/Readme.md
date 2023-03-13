# 02 - Arquitetura de software

- controller
- database
- models
- public => arquivos de frontend
- routes
- views

### configura arquivos estaticos usando path

````
  app.use(express.static(path.join(__dirname, "public")));```
````

### MongoDB Atlas

- new project
  - name your project
  - create project
- Build a database
- shared - free
- choice cloud provider
- clust tier - free forever
- cluster name

- criar username e senha

  - root / admin
  - create user

- Configura IP
  - network access
  - add IP
  - allow anywhere => acesso pra qualquer um
  - confirm

- Connect
  - connect your application
  - copiar string de conexão

Adicionar mongoose
npm i mongoose

npm i dotenv -D
