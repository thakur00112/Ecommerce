import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ProductsList from './pages/ProductsList';
import NewProduct from './pages/NewProduct';
import OrdersList from './pages/OrdersList';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`flex min-h-screen ${isLoginPage ? '' : 'bg-slate-50'}`}>
      {!isLoginPage && <Sidebar />}
      <main className={`flex-1 ${isLoginPage ? '' : 'p-8'}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/new" element={<NewProduct />} />
          <Route path="/orders" element={<OrdersList />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
