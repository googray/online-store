import styles from './NotFoundBox.module.scss';

function NotFoundBox() {
  return (
    <h1 className={styles.main}>
      <span>🚧</span>
      <br />
      <hr />
      Sorry! No products were found matching your selection.
    </h1>
  );
}

export default NotFoundBox;
