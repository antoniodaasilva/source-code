package main

import (
	"fmt"
	"reflect"
)

func main() {
	
	slice := []int{3, 5, 6, 1, 23, 3, 3, 5, 6, 6}
	fmt.Println(slice)
	slice = append(slice, 6)
	fmt.Println(slice)

	fmt.Println(reflect.TypeOf(slice))


}