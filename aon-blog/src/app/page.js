"use client";
import Header from "./components/Header/header";
import Card from "./components/card/Card";
import Container from "./components/containter/Container";
import styles from "./page.module.css";

export default function Home() {
  let list=[{},{},{},{},{},{}]
  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <Container>
          <div className={styles.coverContent}>
          <h1>Simple Blog.</h1>
          <p>A blog created by Aon 2023</p>
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.grid}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </main>
  );
}
