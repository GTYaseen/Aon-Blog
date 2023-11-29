"use client";
import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import FavCard from "../components/FavCard/FavCard";
import { useStore } from "../store";

export default function Favorite() {
  const { favorite, setFavorite } = useStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fav = localStorage.getItem("blog-fav");
    if (fav) setFavorite(JSON.parse(fav));
  }, []);

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <Container>
              <h1>Favorite Blog.</h1>
              <p>this is your favorite blogs</p>
            </Container>
          </div>
        </div>
      </div>
      <div className={styles.over}>
        <Container>
          <div className={styles.cardContainer}>
            {loading === true && <span className={styles.loader}>Empty</span>}
            {favorite.map((fblog, index) => (
              <FavCard fblog={fblog} key={index} />
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
