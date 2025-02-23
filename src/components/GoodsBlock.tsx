import { useState } from 'react';

type GoodsItemProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  goodsCount: number;
  setGoodsCount: Function;
  addedCount: number;
};

const GoodsBlock: React.FC<GoodsItemProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  goodsCount,
  setGoodsCount,
  addedCount,
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ['Mineral', 'SemiSynthetic', 'Synthetic'];

  const onClickHandler = () => {
    setGoodsCount(
      // if(goodsCount < 20) { goodsCount + 1 }
      // else {
      //   alert(`Sorry, maximum 20 items in the cart`)
      goodsCount + 1
    );
  };

  return (
    <div className="oil-block__container">
      <div className="oil-block">
        <img className="oil-block__image" src={imageUrl} alt="Engine oil" />
        <h4 className="oil-block__title">{title}</h4>

        <div className="oil-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                className={activeType === typeId ? 'active' : ''}
                onClick={() => setActiveType(typeId)}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                key={i}
                className={activeSize === i ? 'active' : ''}
                onClick={() => {
                  setActiveSize(i);
                }}
              >
                {size}L.
              </li>
            ))}
          </ul>
        </div>
        <div className="oil-block__bottom">
          <div className="oil-block__price"> {price} euro</div>
          <button
            onClick={onClickHandler}
            className="button button--outline button--add"
          >
            <>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Add</span>
              <i>{addedCount}</i>
            </>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoodsBlock;
