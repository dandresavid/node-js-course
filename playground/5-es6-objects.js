const name = 'Andres'
const userAge = 27

const user = {
  name, //Shorthand property
  age: userAge,
  location: 'Medellin'
}

console.log(user)

// object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock

//rating: 5 would just take effect when there is not a property in the object that matches the attribute
const {label:productLable, price, stock, salePrice, rating = 5} = product

console.log(productLable),
console.log(price),
console.log(salePrice)
console.log(rating)

const transation = (type, {label,stock = 0} = {}) => {
  console.log(type,label,stock)
}

transation('order', product)


