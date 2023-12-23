import ProductCard from '../Fragments/ProductCard'

const products = [
  {
    id: 1,
    title: 'Sepatu Baru',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/images/shoes.jpg',
    price: 'Rp. 1.000.000'
  },
  {
    id: 2,
    title: 'Sepatu Baru',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/images/shoes.jpg',
    price: 'Rp. 1.000.000'
  },
  {
    id: 3,
    title: 'Sepatu Baru',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: '/images/shoes.jpg',
    price: 'Rp. 1.000.000'
  }
]

export default function ProductPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductCard.Header image={product.image} />
          <ProductCard.Body title={product.title}>
            {product.description}
          </ProductCard.Body>
          <ProductCard.Footer price={product.price} />
        </ProductCard>
      ))}
    </div>
  )
}
