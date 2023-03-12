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
