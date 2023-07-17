import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
  const [category, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('https://palletedecore.onrender.com/api/category/all-categories');
      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://palletedecore.onrender.com/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  const handleProductImageChange = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!isEditing) {
      const newProduct = {
        category,
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage,
      };
      try {
        const response = await axios.post('https://palletedecore.onrender.com/api/products', newProduct);
        setProducts([...products, response.data]);
      } catch (error) {
        console.error(error);
      }
    } else {
      const updatedProduct = {
        id: products[editIndex].id,
        category,
        name: productName,
        price: productPrice,
        description: productDescription,
        image: productImage,
      };
      try {
        await axios.put(`https://palletedecore.onrender.com/api/products/${updatedProduct.id}`, updatedProduct);
        const updatedProducts = [...products];
        updatedProducts[editIndex] = updatedProduct;
        setProducts(updatedProducts);
        setIsEditing(false);
      } catch (error) {
        console.error(error);
      }
    }
    setCategory('');
    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductImage(null);
  };

  const handleEditProduct = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    const productToEdit = products[index];
    setCategory(productToEdit.category);
    setProductName(productToEdit.name);
    setProductPrice(productToEdit.price);
    setProductDescription(productToEdit.description);
    setProductImage(productToEdit.image);
  };

  const handleDeleteProduct = async (index) => {
    const productId = products[index].id;
    try {
      await axios.delete(`https://palletedecore.onrender.com/api/products/${productId}`);
      setProducts(products.filter((_, i) => i !== index));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (category.trim() === '') return;
  
    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: {
          Authorization:`Bearer ${token}` ,
        },
      };
  
      const newCategory = { name: category };
      const response = await axios.post('https://palletedecore.onrender.com/api/category/add-category', newCategory, config);

    
      setCategory('');
      setCategories([...categories, response.data]);
      toast.success('Category added successfully.'); // Display success message as toast notification
    
    
  } catch (error) {
    console.error('Error:', error.message);
    console.log(error.response?.data);
  }
  };
  

  return (
    <div className="products-container">
      <h2>Create Category</h2>
      <form onSubmit={handleAddCategory}>
        <label>
          Category Name:
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            className="product-input"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">
          Add Category
        </button>
      </form>

      <h2>Create Product</h2>
      <form onSubmit={handleAddProduct}>
        <label>
          Category:
          <select className="category-dropdown" value={category} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            className="product-input"
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={productPrice}
            onChange={handleProductPriceChange}
            className="product-input"
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={productDescription}
            onChange={handleProductDescriptionChange}
            className="product-input"
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleProductImageChange} />
        </label>
        <br />
        <button type="submit" className="submit-button">
          {isEditing ? 'Update' : 'Add Product'}
        </button>
      </form>
      <h2>Products List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                {product.image && (
                  <img src={URL.createObjectURL(product.image)} alt={product.name} className="product-image" />
                )}
              </td>
              <td>
                <button className="edit-button" onClick={() => handleEditProduct(index)}>
                  Edit
                </button>
                <button className="delete-button" onClick={() => handleDeleteProduct(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Products;
