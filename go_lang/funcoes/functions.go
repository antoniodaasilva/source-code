package main

import "fmt"


func sum(n1 int8, n2 int8) int8 {
	return n1 + n2
}

func main() {
	soma := sum(5, 6)

	var showTxt = func(txt string) string{
		fmt.Println(txt)
		return txt
	}

	result := showTxt("mostrado")

	fmt.Println(result)
	fmt.Println(soma)

}