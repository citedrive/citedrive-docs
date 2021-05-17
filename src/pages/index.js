import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Project and platform based',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        No folder chaos; instead, each of your works gets its own project. You can choose between our standard, BibTeX, and R-Markdown projects, each with native support for generating citations and bibliographies in the correct format. All your references are in the cloud—no more stress with data loss or with annoying patches.
      </>
    ),
  },
  {
    title: 'Fully collaborative and unobtrusive!',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        We know how essential teamwork is for scientists. Comprehensive tools for teams have become commonplace, and most importantly, papers are rarely written alone. We have therefore built our platform for collaboration.
Add colleagues to your project at any time. You and your team collect, structure, and annotate references and material for your work, clearly organized in one project.
      </>
    ),
  },
  {
    title: 'Simple but powerful!',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        No more back and forth and no more installing countless plugins on your devices. We generate citations and bibliographies in the cloud, which you can then conveniently use in your paper.
Whether for Word, Google-docs, LaTeX, or R-markdown, we provide you with the necessary tools and over 9000 citation styles and various output languages. We want to be a pure platform for citing and creating bibliographies and work in conjunction with the tools you already use. You can directly feed the citations and bibliographies into your writing program or export them to other literature management programs. And we have seamless integrations with Overleaf, Word, Google Docs, R-Markdown, and many other tools.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A short introduction on how to get started with CiteDrive - Citation Guidelines - BibTeX - Academic Publishing">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={'https://app.citedrive.com/'}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
