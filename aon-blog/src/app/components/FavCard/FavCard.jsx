import React, { useEffect, useState } from "react";
import styles from "./FavCard.module.css";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";
import FavBtn2 from "../favBtn/FavBtn";

const FavCard = ({ fblog , fbtn}) => {
    // console.log(fblog);
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={fblog.photo_url} alt={fblog.title} fill />
      </div>
      <div className={styles.title}>
        <h1>{fblog.title}</h1>
      </div>
      <div className={styles.subTitle}>
        <p>{fblog.category}</p>
      </div>
      <div className={styles.footer}>
        <div className={styles.read}>
          <Link href={`/article/${fblog.id}`}>Read Article </Link>
        </div>
        <p>{dayjs(fblog.created_at).format("YYYY, MMM DD")}</p>
      </div>
    </div>
  );
};

export default FavCard;
