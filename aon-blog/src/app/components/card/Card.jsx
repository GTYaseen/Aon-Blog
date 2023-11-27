import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStore } from "@/app/store";

const Card = ({ blog }) => {
  const [isFavorite, setIsFavorite] = useState(true);
  const { favorite, setFavorite } = useStore();

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    let newItem = {
      item: blog,
      favorite: isFavorite,
    };
    let Blog = favorite.find((item) => item?.id === newItem?.id);
    if (!Blog) {
      setFavorite([...favorite, newItem]);
    }else{
      setFavorite(favorite.filter((item) => item?.id !== newItem?.id));
    }
  };
  useEffect(() => {
    console.log(favorite);
  }, [favorite]);
  const heartIcon = !isFavorite ? (
    <FaHeart style={{ color: "red" }} />
  ) : (
    <FaRegHeart />
  );
  return (
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
          <Link href={`/article/${blog.id}`}>Read Article </Link>
          <button onClick={handleFavorite}>{heartIcon}</button>
        </div>
        <p>{dayjs(blog.created_at).format("YYYY, MMM DD")}</p>
      </div>
    </div>
  );
};

export default Card;
