import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../../styles/utils.module.scss';
import { ReactNode } from 'react';
import Link from 'next/link';
Link
const name = 'Shin Code';
export const siteTitle = 'Next.js blog';

function Layout({ children , home }:{ children:ReactNode , home?:ReactNode },) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
            <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle}`}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
            </>
        )}
        
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
