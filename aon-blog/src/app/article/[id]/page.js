  import Header from "@/app/components/Header/Header";
  import Container from "@/app/components/containter/Container";
  import Footer from "@/app/components/footer/Footer";
  import Styles from "./page.module.css";
  import dayjs from "dayjs";

  async function getData(id) {
    const res = await fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  export default async function Article({ params }) {
    let data = await getData(params.id);
    return (
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
          <div className={Styles.content} dangerouslySetInnerHTML={{__html: `${data.blog.content_text.slice(0, 600)}...`}}/>
          <div className={Styles.hr}><hr/></div>
          <div dangerouslySetInnerHTML={{__html: data.blog.content_html}}/>
        </Container>
        <Footer />
      </main>
    );
  }
