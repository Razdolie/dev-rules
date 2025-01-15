import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Регламент разработки',
    link: "regulations",
    icon: "📜",
    description: (
      <>
        Набор практик и стандартов, обеспечивающих качественную и эффективную разработку
      </>
    ),
  },
  {
    title: 'Библиотека проектных решений',
    link: "psl",
    icon: "📚",
    description: (
      <>
        Повышает качество разработки и упрощает сопровождение проектов
      </>
    ),
  },
  {
    title: 'Мастер-классы',
    link: "master-class",
    icon: "🥋",
    description: (
      <>
        Делимся практиками в разработке, предоставляя ценные знания и опыт для улучшения навыков
      </>
    ),
  },
];

function Feature({icon, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <span className={styles.icon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
