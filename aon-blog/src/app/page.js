"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Card from "./components/card/Card";
import Container from "./components/containter/Container";
import Footer from "./components/footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  const [list, setList] = useState([]);
  const blog = ()=>{
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9`)
    .then((res) => res.json())
    .then((data) => setList(data.blogs));
  };
  useEffect(() => {
    blog();
  }, []);
  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <Container>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </Container>
          </div>
        </div>
      </div>
      <Container>
        <div className={styles.cardContainer}>
          {list.map((blog, index) => (
            <Card blog={blog} key={index}/>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
