// nome do pacote é o mesmo da pasta
package entity

import "errors"

type Order struct {
	ID 					string
	Price 			float64
	Tax 				float64
	FinalPrice 	float64
}


func NewOrder(id string, price float64, tax float64) (*Order, error) {
	order := &Order{
		ID: id,
		Price: price,
		Tax: tax,
	}

	err := order.Validate()
	if err != nil  {
		return nil, err
	}
	return order, nil

}

//criar um ponteiro para Order e retorna um erro 
func (o *Order) Validate() error {
	if o.ID == "" {
		return errors.New("id is required!")
	}
	if o.Price <= 0 {
		return errors.New("Invalid price")
	}
	if o.Tax <= 0 {
		return errors.New("Invalid tax")
	}
	return nil
}

func (o *Order) CalculateFinalPrice() error {
	o.FinalPrice = o.Price + o.Tax
	err := o.Validate()
	if err != nil {
		return err
	}
	return nil
}

