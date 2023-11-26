"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Card from "./components/card/Card";
import Container from "./components/containter/Container";
import Footer from "./components/footer/Footer";
import styles from "./page.module.css";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [favorite, setFavorite] = useState([]);
  const blog = () => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=9&offset=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setList([...list, ...data.blogs]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    blog();
  }, [skip]);
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
      <div className={styles.over}>
        <Container>
          <InfiniteScroll
            dataLength={list.length}
            next={() => setSkip(skip + 9)}
            hasMore={true}
            className={styles.over}
            endMessage={
              <p style={{ textAlign: "center" }}>you have seen it all</p>
            }
            loader={<span className={styles.loader}></span>}
          >
            <div className={styles.cardContainer}>
              {loading && <span className={styles.loader}></span>}
              {list.map((blog, index) => (
                <Card blog={blog} key={index} />
              ))}
            </div>
          </InfiniteScroll>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
