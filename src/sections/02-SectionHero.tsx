import Button from '../components/Button';
import styles from './02-SectionHero.module.css';

export default function SectionHero() {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
        <TextBox />
        <ImgBox />
      </div>
    </section>
  );
}

function TextBox() {
  return (
    <div>
      <h1 className={styles.heading}>
        A healthy meal delivered to your door, every single day
      </h1>
      <p className={styles.text}>
        The smart 365-days-per-year food subscription that will make you eat healthy
        again. Tailored to your personal tastes and nutritional needs.
      </p>

      <div className={styles.btnGroup}>
        <Button type='primary'>Start eating well</Button>
        <Button type='secondary'>Learn more &darr;</Button>
      </div>

      <Delivered />
    </div>
  );
}

function Delivered() {
  const customers = Array.from({ length: 6 }, (_, i) => i + 1);
  return (
    <div className={styles.deliveredBox}>
      <div className={styles.customers}>
        {customers.map(c => (
          <img
            key={c}
            className={styles.customerImg}
            src={`../../img/customers/customer-${c}.jpg`}
          />
        ))}
      </div>

      <p className={styles.deliveredText}>
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
}

function ImgBox() {
  return (
    <div className={styles.imgBox}>
      <img className={styles.heroImg} src='../../img/hero.png' />
    </div>
  );
}
