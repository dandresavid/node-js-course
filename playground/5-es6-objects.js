const name = 'Andres'
const userAge = 27

const user = {
  name,
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


const {label:productLable,price,stock,salePrice, rating = 5} = product

console.log(productLable),
console.log(price),
console.log(salePrice)
console.log(rating)

const transation = (type, {label,stock} = {}) => {
  console.log(type,label,stock)
}

transation('order', product)


