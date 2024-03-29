import type { NextPage } from 'next';
import Head from 'next/head';
import Particles from '../components/particles';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Faizar!</title>
        <meta name="description" content="portfolio in nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles id="tsparticles" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Faizar!</a>
        </h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;
