import { Inter } from 'next/font/google';
import Layout, { siteTitle } from './components/Layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import styles from "../styles/Home.module.scss"
import { getPostsData } from "../lib/post"
import { Key, ReactNode } from 'react';
import { AllPostsData } from '@/interface/PostDataIF';
import Head from 'next/head';
Head

const inter = Inter({ subsets: ['latin'] });

//SSGの場合
export async function getStaticProps() {
  // const fetchData = await fetch("endpoint")
  const allPostsData = getPostsData(); //id, title, date, thumbnail
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    }
  }
};
//SSRの場合
// export async function getServerSideProps(context:any) {
//   return {
//     props: {
//       //コンポーネントを渡すためのprops

//     }
//   }
// }

export default function Home({ allPostsData }:{ allPostsData: AllPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>`///////////////////////////////////////`</p>
      </section>
      <section>
      <h2>エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((
            { id, title, date, thumbnail }:{ id: Key, title: String, date: String, thumbnail: String }) => (
          <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} className={styles.thumbnailImage} />
          </Link>
          <Link href={`/posts/${id}`} legacyBehavior>
                <a className={utilStyles.boldText}>{ title }</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>{ date }</small>
        </article>
          ))}
      </div>
      </section>
    </Layout>
  );
}
