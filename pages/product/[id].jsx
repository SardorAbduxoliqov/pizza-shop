import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.2, 23.8, 37.9],
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus saepe atque cum.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Product;
