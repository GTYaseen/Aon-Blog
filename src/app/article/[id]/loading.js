import Container from "../../components/Container/Container";
import styles from "./page.module.css";

const loading = () => {
  return (
    <div>
      <Container>
        <div className={styles.loading}>
          <span className={styles.loader}></span>
        </div>
      </Container>
    </div>
  );
};

export default loading;
