import { Link, useNavigate } from "react-router-dom"


const Products = () => {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/welcome");

  }
  return (
    <section>
      <h2>Products Page</h2>
      <ul>
        <li>
          <Link to="/products/2">Books</Link>
        </li>
        <li>
          <Link to="/products/3">Series</Link>
        </li>
      </ul>
      <button onClick={buttonClickHandler}>Go to Welcome Page</button>
    </section>
  )
}

export default Products