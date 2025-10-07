import styles from './03-SectionFeatured.module.css';

export default function SectionFeatured() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <p className={styles.title}>As featured in</p>

        <div className={styles.logos}>
          <img src='img/logos/techcrunch.png' />
          <img src='img/logos/business-insider.png' />
          <img src='img/logos/the-new-york-times.png' />
          <img src='img/logos/forbes.png' />
          <img src='img/logos/usa-today.png' />
        </div>
      </div>
    </section>
  );
}
