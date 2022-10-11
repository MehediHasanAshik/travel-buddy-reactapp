import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllDestinations from './pages/AllDestinations/AllDestinations';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AllPackages from './pages/AllPackages/AllPackages/AllPackages';
import IndividualPackage from './pages/AllPackages/IndividualPackage/IndividualPackage';
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import BookPackage from './pages/BookPackage/BookPackage';
import Booked from './pages/Booked/Booked';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/alldestinations' element={<AllDestinations />} />
            <Route path='/allpackages' element={<AllPackages />} />
            <Route path='/individualpackage' element={<IndividualPackage />} />
            <Route
              path='/bookpackage'
              element={
                <PrivateRoute>
                  <BookPackage />
                </PrivateRoute>
              } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/booked' element={<Booked />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
