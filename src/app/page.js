"use client";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import Container from "./components/Container/Container";
import Footer from "./components/footer/Footer";
import styles from "./page.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStore } from "./store";
import "intro.js/introjs.css";
import introJs from "intro.js";
import { useRef } from "react";

export default function Home() {
  const homeIntroRef = useRef();
  const cardIntroRef = useRef();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const { setFavorite } = useStore();

  const blog = () => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=12&offset=${skip}`
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

  useEffect(() => {
    let fav = localStorage.getItem("blog-fav");
    if (fav) setFavorite(JSON.parse(fav));
  }, []);

  useEffect(() => {
    const initializeIntro = () => {
      const steps = [
        {
          intro: "Welcome to the Simple Blog!",
        },
        {
          element: ".h1",
          intro: "This is the title",
        },
        {
          element: ".card-div",
          intro: "Explore the blog posts here!",
        },
        {
          element: ".header",
          intro: "This is the header",
        }
      ];

      homeIntroRef.current = introJs().setOptions({
        steps,
        showBullets: false,
      });

      // Start home intro after a delay
      setTimeout(() => {
        homeIntroRef.current.start();
      }, 1000);
    };

    initializeIntro();
  }, []);

  return (
    <main className={styles.home}>
      <div className="header">
      <Header/>
      </div>
      <div className={styles.cover}>
        <div className={styles.overlay}>
          <div className={styles.title}>
            <Container>
              <h1 className="h1">Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </Container>
          </div>
        </div>
      </div>
      <Container>
        <div className="card-div">
          <div className={styles.over}>
            <InfiniteScroll
              dataLength={list.length}
              next={() => setSkip(skip + 12)}
              hasMore={true}
              className={styles.over}
            >
              <div className={styles.cardContainer}>
                {loading && <span className={styles.loader}>Loading</span>}
                {list.map((blog, index) => (
                  <Card blog={blog} key={index} introRef={cardIntroRef} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
