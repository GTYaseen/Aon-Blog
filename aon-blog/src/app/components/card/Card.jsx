import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
const Card = ({ blog }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={blog.photo_url} alt={blog.title} fill/>
      </div>
      <div className={styles.title}>
        <h1>{blog.title}</h1>
      </div>
      <div className={styles.subTitle}>
        <p>{blog.category}</p>
      </div>
      <div className={styles.footer}>
        <Link href="/">Read Article</Link>
        <p>{dayjs(blog.created_at).format("YYYY, MMM DD")}</p>
      </div>
    </div>
  );
};
export default Card;