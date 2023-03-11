Comando para inciar o projeto
go mod init github.com/antoniodaasilva/source-code

Instala dependencias
go mod tidy

Pasta internal 
Lugar onde fica todo código que desenvolvemos e que não será compartilhado

O nome do pacote deve ser o mesmo nome da pasta

forma comum de validar erros no go_lang
err := order.Validate()
	if err != nil  {
		return nil, err
	}
	return order, nil

	A palavra "go" antes de uma tarefa incia o multthreading


docker-compose up -d
docker-compose exec goapp bash
go run cmd/consumer/main.go