import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import Pin from '../../static/img/pin.svg';


const features = [
  {

    imageUrl: 'img/project.svg',

  },
  {
    title: 'Project and platform based',
    description: (
      <>
        No folder chaos; instead, each of your works gets its own project. You can choose between our standard, BibTeX, and R-Markdown projects, each with native support for generating citations and bibliographies in the correct format. All your references are in the cloud—no more stress with data loss or with annoying patches.
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
  const athing = "i don't change"
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
      <main>
      <section className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#393838" }}>
        <div className="container">

          <p className="hero__subtitle">
          <div className="row">
            <Pin style={{marginLeft: "auto", marginRight: "auto", marginBottom: "1.4rem", height: "118px"}}/>

            <Translate>With CiteDrive, the focus is on a simple and equally appealing user experience.

From the beginning, we wanted the app to be beautiful but distraction-free, with simply a few and yet the most essential functions and minimal fuss.

We want to offer you a techno-stress-free experience while working on your paper. No intrusive social network nonsense, ads, and features that no one asks for. In the end, CiteDrive is and will always be “nothing” but a reference manager, with precisely the functions you need!
</Translate>
</div>
</p>

        </div>
      </section>



        {/* */}
      <section className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#af2996" , height: "1020px"}}>
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
