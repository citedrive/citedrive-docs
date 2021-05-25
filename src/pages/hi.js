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
        Instead of a jumble of folders, each of the works is assigned to its own project. You can choose from our regular, BibTeX, and R-Markdown ventures, all of which have native support for generating correct citations and bibliographies. All of your references are stored in the cloud, so you won't have to worry about losing data or dealing with annoying patches.
      </>
    ),
  },
  {
    title: 'Fully collaborative and unobtrusive!',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        We all know how crucial collaboration is for scientists. Comprehensive team-building tools are now popular, and articles are rarely written alone. That is why we created our platform to facilitate collaboration. You may invite collaborators to your project at any time. You and your team gather, coordinate, and annotate sources and materials for your project in a single project.
      </>
    ),
  },
  {
    title: 'Simple but powerful!',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        There will be no more back-and-forth, and you will not have to mount a plethora of plugins on your computers. In the cloud, we create citations and bibliographies, which you can then use in your article. We provide you with the required resources, as well as over 9000 citation types and various output languages if you're using Word, Google Docs, LaTeX, or R-markdown.
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
//FFFFFD
export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="A short introduction on how to get started with CiteDrive - Citation Guidelines - BibTeX - Academic Publishing">
              <header className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#9119B3", color: "rgb(31 215 96)", }}>  
        <div className="container">
          <h1 style={{fontSize: "156px"}} className="hero__title">Nothing but a <br />Referencing Tool</h1>
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
      <section className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#393838" }}>
        <div className="container">

          <p className="hero__subtitle">With CiteDrive, the focus is on a simple and equally appealing user experience.

From the beginning, we wanted the app to be beautiful but distraction-free, with simply a few and yet the most essential functions and minimal fuss.

We want to offer you a techno-stress-free experience while working on your paper. No intrusive social network nonsense, ads, and features that no one asks for. In the end, CiteDrive is and will always be “nothing” but a reference manager, with precisely the functions you need!</p>
  
        </div>
      </section>
              

      <main>
      <section className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#B7F7F7" , height: "1020px"}}>
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
         </section>
      </main>
    </Layout>
  );
}
