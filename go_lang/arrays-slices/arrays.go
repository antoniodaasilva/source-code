package main

import "fmt"

func main() {
	var array1[5] int
	array1[0] = 1
	array1[1] = 2
	array1[2] = 3
	array1[3] = 4
	array1[4] = 5

	
	fmt.Println(array1)


	array2 := [2]string{"ola", "mundo"}
	fmt.Println(array2)

	array3 := [...]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	fmt.Println(array3)
	fmt.Println(cap(array3))
	fmt.Println(len(array3))


}