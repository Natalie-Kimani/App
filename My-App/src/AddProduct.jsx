import { useState, useId } from "react";

export default function AddProduct({ addProduct }) {
  const id = useId();

  const [form, setForm] = useState({
    name: "",
    description: "",
    origin: "",
    roast: "Medium",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      id,
      ...form,
      price: parseFloat(form.price),
    });

    setForm({
      name: "",
      description: "",
      origin: "",
      roast: "Medium",
      price: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <input
        placeholder="Origin"
        value={form.origin}
        onChange={(e) =>
          setForm({ ...form, origin: e.target.value })
        }
      />

      <input
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) =>
          setForm({ ...form, price: e.target.value })
        }
      />

      <button type="submit">Add Product</button>
    </form>
  );
}