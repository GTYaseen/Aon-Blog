import styles from "./footer.module.css";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p>All Rights Reserved - Aon2023-Yaseen</p>
          <div className={styles.contact}>
            <ul>
              <li>
                <Link href="/">
                  <FaFacebookSquare />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
