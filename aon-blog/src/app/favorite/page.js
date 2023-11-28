"use client";
import { useEffect, useState } from "react";
import Container from "../components/containter/Container";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import FavCard from "../components/FavCard/FavCard";


// localStorage.getItem()
export default function Favorite() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("favorite"));
    if (items) {
      setItems(items);
    }
    if (items.length === 0)
  {
    setLoading(true);
  }else{
    setLoading(false);
  }
  }, []);
  console.log(items);

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
            {loading===true && <span>Empty</span>}
              {items.map((fblog, index) => (
                <FavCard fblog={fblog.item} key={index} />
              ))}
            </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
