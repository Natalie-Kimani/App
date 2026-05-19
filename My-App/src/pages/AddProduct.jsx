import { useState, useId } from 'react'

function AddProduct({ addProduct }) {
  const generatedId = useId()

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    origin: '',
    roast: 'Medium',
    price: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    addProduct({
      id: generatedId,
      ...formData,
      price: parseFloat(formData.price),
    })

    setFormData({
      name: '',
      description: '',
      origin: '',
      roast: 'Medium',
      price: '',
    })
  }

  return (
    <div style={styles.container}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          name="name"
          placeholder="Coffee name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          name="origin"
          placeholder="Origin"
          value={formData.origin}
          onChange={handleChange}
        />

        <select
          style={styles.input}
          name="roast"
          value={formData.roast}
          onChange={handleChange}
        >
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>

        <input
          style={styles.input}
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />

        <button style={styles.button} type="submit">
          Add Product
        </button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    padding: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
  },
  input: {
    padding: '0.7rem',
    borderRadius: '6px',
    border: '1px solid #444',
  },
  button: {
    padding: '0.8rem',
    backgroundColor: '#646cff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
}
export { AddProduct }
export default AddProduct