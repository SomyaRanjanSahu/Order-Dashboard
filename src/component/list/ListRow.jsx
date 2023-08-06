import styles from "./ListRow.module.css";

const ListCell = ({ children, item, onRowClick }) => {
  const handleClick = () => {
      onRowClick(item)
  }
  return <tr className={styles.cell} onClick={handleClick}>{children}</tr>;
};

export default ListCell;
