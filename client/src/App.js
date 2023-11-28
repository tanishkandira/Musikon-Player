import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import {Toaster} from 'react-hot-toast';

function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <div className="App">
      {/* Spinner Component */}
      {loading && <Spinner/>}
      {/* React hot toast */}
      <Toaster
        position="top-center" reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          {/* Home is accessible only if user valid through ProtectedRoute */}
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          {/* If logged in user still goes to register or login then redirect to home */}
          <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/> 
          <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
