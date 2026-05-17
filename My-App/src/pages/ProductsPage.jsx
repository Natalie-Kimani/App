import { useState } from 'react'
import ProductCard from '../components/ProductCard'

function ProductsPage({
  products,
  updateProduct,
  deleteProduct,
}) {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={styles.container}>
      <h1>Products</h1>

      <input
        style={styles.search}
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onUpdate={updateProduct}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
  },
  search: {
    padding: '0.7rem',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '2rem',
    borderRadius: '6px',
    border: '1px solid #444',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
}

export { ProductsPage }
export default ProductsPage