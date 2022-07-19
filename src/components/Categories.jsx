// import { useState } from 'react';

function Categories({ value, onChangeCategory }) {
  // const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'All',
    'SAE 0W-20',
    'SAE 0W-30',
    'SAE 5W-20',
    'SAE 5W-30',
    'SAE 5W-40',
    'SAE 10W-40',
  ];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? 'active' : ''}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
