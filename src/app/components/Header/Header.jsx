"use client";
import Container from "../Container/Container";
import styles from "./header.module.css";
import Link from "next/link";
import { useStore } from "@/app/store";

function Header() {
  const { favorite } = useStore();
  return (
    <div className={styles.border}>
      <Container>
        <div className={styles.header}>
          <div className={styles.logo}>
            <h1>Aon 2023</h1>
          </div>
          <div className={styles.content}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/favorite" className="favorite">
                  favorite{" "}
                  {favorite?.length !== 0 && (
                    <div className={styles.count}>{favorite.length}</div>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
