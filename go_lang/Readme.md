#Inciando um módulo
- centraliza todas as dependencias do projeto.
- go mod init (nome_modulo)

#Rodando um arquivo:
- go run (nome_arquivo)

#Pacotes: 
- Conjunto de arquivos em uma mesma pasta.
- Letras maiusculas definem metodos publicos.

#criar e atualizar modulos:
- go build

#salvar na pasta onde o go está instalado:
- go install

#Pacotes externos;
- go get + nome_pacote
ex(go get github.com/badoux/checkmail)

#Removendo dependencias:
- go mod tidy 

#Variaveis:
 - declaração explicita:
  var (nome) (tipo) = (valor)
  var letras string = "valor qualquer"

- declaração implicita:
  (nome) := (valor)
  letras := "valor qualquer"

#Declaração multipla
var (
  nome tipo = valor
  nome tipo = valor
)

var1, var2 := "valor1", "valor2"

- constantes seguem as mesmas regras

#Tipos de dados:
int8
int16
int32
int64
int (usa arquitetura da CPU como base)

uint

- alias
rune
byte

float32
float64

string

bool

error