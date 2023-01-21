package main

import "fmt"

func sub(n1 int8, n2 int8) int8 {
	sub := n1 - n2
	return sub
}

func main() {

	var inteiro int = 999999999999999999
	var num8 int8 = 127
	var num16 int16 = 32767
	var num32 int32 = 1999999999
	var num64 int64 = 999999999999999999
	
	var real float32 = 1.2
	var real2 float64 = 1.4

	var str string = "texto"
	str2 := "inferencia de tipo"

	//alias para o int32
	var num rune = 32

	//alias para uint8
	var semSinal uint8 = 23


	var result = func (n1, n2 int8) int8 {
		return n1 + n2 
	}

	fmt.Println(inteiro)
	fmt.Println(num8)
	fmt.Println(num16)
	fmt.Println(num32)
	fmt.Println(num64)
	fmt.Println(num)
	fmt.Println(semSinal)
	fmt.Println(real)
	fmt.Println(real2)
	fmt.Println(str)
	fmt.Println(str2)
	fmt.Println(result(3, 5))
	fmt.Println(sub(5, 5))


}