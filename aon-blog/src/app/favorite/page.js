"use client";
import { useState} from "react";
import Card from "../components/card/Card";
import Container from "../components/containter/Container";
import Footer from "../components/footer/Footer";
import styles from "./page.module.css";
import Header from "../components/Header/Header";

export default function Favorite() {
  const [loading, setLoading] = useState(true);
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
        </Container>
      </div>
      <Footer />
    </main>
  );
}
