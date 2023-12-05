import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import FavBtn from "../favBtn/FavBtn";

const Card = ({ blog }) => {
  return (
    <div className="card-div">
      <div className={styles.card}>
        <div className={styles.img}>
          <Image src={blog.photo_url} alt={blog.title} fill />
        </div>
        <div className={styles.title}>
          <h1>{blog.title}</h1>
        </div>
        <div className={styles.subTitle}>
          <p>{blog.category}</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.read}>
            <Link href={`/article/${blog.id}` } >Read Article </Link>
            <div className="favBtnContainer">
              <FavBtn blog={blog} />
            </div>
          </div>
          <p>{dayjs(blog.created_at).format("YYYY, MMM DD")}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
