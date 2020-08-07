// Dependencies
import Head from "next/head";

// Components
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";
import PageOne from "../components/contents/page_1.js";
import LayoutOne from "../components/layout/layout_1.js";

// Assets
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <LayoutOne>
        <PageOne />
      </LayoutOne>
      <Footer />
    </div>
  );
}
