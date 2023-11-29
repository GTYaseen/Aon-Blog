import Header from "@/app/components/Header/Header";
import Container from "@/app/components/containter/Container";
import Footer from "@/app/components/footer/Footer";
import Styles from "./page.module.css";
import dayjs from "dayjs";

// Define the getData function outside generateMetadata
async function getData(id) {
  const product = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (!product.ok) {
    throw new Error("Failed to fetch data");
  }
  return product.json();
}

export async function generateMetadata({ params }) {
  const id = params.id;

  const data = await getData(id);

  console.log(data.blog.photo_url);
  return {
    title: data.blog.title,
    description: data.blog.description,
    image: data.blog.photo_url,
  };
}

export default async function Article({ params }) {
  let data = await getData(params.id);

  return (
    <>
      <main>
        <Header />
        <Container>
          <div className={Styles.top}>
            <div className={Styles.title}>
              <h1>{data.blog.title}</h1>
              <p>{data.blog.category}</p>
            </div>
            <div className={Styles.date}>
              <p>{dayjs(data.blog.created_at).format("YYYY, MMM DD")}</p>
            </div>
          </div>
          <div className={Styles.img}>
            <img src={data.blog.photo_url} alt={data.blog.title} />
          </div>
          <div
            className={Styles.content}
            dangerouslySetInnerHTML={{
              __html: `${data.blog.content_text.slice(0, 600)}...`,
            }}
          />
          <div className={Styles.hr}>
            <hr />
          </div>
          <div
            className={Styles.fcontent}
            dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
          />
        </Container>
        <Footer />
      </main>
    </>
  );
}
