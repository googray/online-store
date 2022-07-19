import { useState, useEffect } from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import GoodsBlock from '../components/GoodsBlock';
import NotFound from './NotFound';
import RangeSlider from '../components/RangeSlider';

type HomeProps = {
  searchValue: string;
  goodsCount: number;
  setGoodsCount: Function;
};

const Home: React.FC<HomeProps> = ({
  searchValue,
  goodsCount,
  setGoodsCount,
}) => {
  const [goods, setGoods] = useState<
    {
      id: number;
      title: string;
      price: number;
      imageUrl: string;
      sizes: number[];
      types: number[];
      addedCount: number;
    }[]
  >([]);

  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: 'best seller',
    sortProperty: 'rating',
  });

  useEffect(() => {
    fetch(
      `https://62ce8999826a88972dfd6d41.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=asc`
    )
      .then((res) => res.json())
      .then((arr) => setGoods([...arr]));
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  // const [filter, setFilter] = useState(getDataStorage);
  // const getDataStorage = () => localStorage.getItem('filter') || [];

  const goodsRender = goods
    .filter((item) => {
      if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <GoodsBlock
        goodsCount={goodsCount}
        setGoodsCount={setGoodsCount}
        key={obj.id}
        // addedCount={goods[obj.id] && goods[obj.id].length}
        {...obj}
      />
    ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i: number) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeType={(i: any) => setSortType(i)} />
      </div>
      <div className="content__search">
        <h2 className="content__title">All goods</h2>
        <RangeSlider />
      </div>
      <div className="content__items">
        {goodsRender.length === 0 ? <NotFound /> : goodsRender}
      </div>
    </div>
  );
};

export default Home;
