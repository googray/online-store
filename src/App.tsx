import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './components/Header';

import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// import db from './assets/db.json';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [goodsCount, setGoodsCount] = useState(0);

  return (
    <>
      <div className="wrapper">
        <Header
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          goodsCount={goodsCount}
          // setGoodsCount={setGoodsCount}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  searchValue={searchValue}
                  goodsCount={goodsCount}
                  setGoodsCount={setGoodsCount}
                />
              }
            />
            <Route path="/cart" element={<Cart goodsCount={goodsCount} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
