
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css'
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import Admin from './pages/Admin';
import ProtectedAdmin from './pages/ProtectedAdmin';
import Orders from './pages/Admin/Orders';
import AdminProducts from './pages/Admin/Prooducts';
import AdminProductDetail from './pages/Admin/AdminProductDetail';
import NewProduct from './pages/Admin/Prooducts/new';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
 <Navbar/>
<div id="content">
<Routes>

<Route path='/' element={<Products/>} />
<Route path='/product/:product_id' element={<ProductDetail/>} />
<Route path='/signin' element={<Signin/>} />
<Route path='/signup' element={<Signup/>} />
<Route path='/basket' element={<Basket/>} />

<Route element={<ProtectedRoute />}>
						<Route path="/profile" element={<Profile />} />

						
					</Route>
          <Route element={<ProtectedAdmin/>}>
          <Route index path="/admin" element={<Admin />} />
						<Route path="/admin/orders" element={<Orders />} />
						<Route path="/admin/products" element={<AdminProducts />} />
						<Route path="/admin/products/new" element={<NewProduct />} />
						<Route path="/admin/products/:product_id" element={<AdminProductDetail />} />
          </Route>
<Route path='*' element={<Error404/>} />
</Routes>
</div>
      </div>
      
      
      
      
      </BrowserRouter>

    </div>
  );
}
function Home() {
  return <h2>Home</h2>
}

export default App;
