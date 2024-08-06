import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{backgroundImage: "linear-gradient(to right, #f472b6, #a78bfa, #22d3ee)"}}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/gpt-researcher/getting-started">
            快速开始 - 5分钟 ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`文档`}
      description="AIPM 研究员是一款领先的自主智能体，专为各种任务的全面在线研究设计。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}