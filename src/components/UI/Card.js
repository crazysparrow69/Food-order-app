import styles from "./Card.module.css";

const Card = (props) => {
  const style = props.className
    ? `${props.className} ${styles.card}`
    : `${styles.card}`;

  return <div className={style}>{props.children}</div>;
};

export default Card;
