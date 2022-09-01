import Welcome from './Components/Welcome/Welcome';
import './App.css';
import Products from './Components/Products/Products';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainHeader from './Components/MainHeader/MainHeader';
import ProductDetails from './Components/ProductDetails/ProductDetails';
//Routes means Group of all route
//Route means path for single page
function App() {
  return (
    <div >
      <MainHeader />
     <main>
     <Routes>
       {/* localhost:3000 */}
        {/* <Route path="/" element={<Welcome />}/> */}
        <Route path='/' element={<Navigate to="/Welcome"/>} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path='*' element={<p>page Not Found</p>} />
      </Routes>
     </main>
     
    </div>
  );
}

export default App;

// data 64
