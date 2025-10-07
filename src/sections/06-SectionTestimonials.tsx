// react
import { useGetTestimonials } from '../hooks/useGetTestimonials';
// components
import HeadingPrimary from '../components/HeadingPrimary';
import Loader from '../components/Loader';
import Message from '../components/Message';
import styles from './06-SectionTestimonials.module.css';
import type { TestimonialT } from '../types/types';

export default function SectionTestimonials() {
  return (
    <section className={styles.section}>
      <Testimonials />
      <Gallery />
    </section>
  );
}

function Testimonials() {
  const { testimonials, isLoading, error } = useGetTestimonials();

  if (isLoading) return <Loader />;
  if (error) return <Message>{error.message}</Message>;

  return (
    <div className={styles.testimonialsBox}>
      <HeadingPrimary subHeading='Testimonials'>
        Once you try it, you can't go back
      </HeadingPrimary>

      <div className={styles.testimonials}>
        {testimonials?.map(t => (
          <Testimonial testimonial={t} key={t.authorName} />
        ))}
      </div>
    </div>
  );
}

function Testimonial({ testimonial }: { testimonial: TestimonialT }) {
  const { img, text, authorName } = testimonial;

  return (
    <figure className={styles.testomonial}>
      <img src={img} className={styles.authorImg} />
      <blockquote className={styles.text}>{text}</blockquote>
      <p className={styles.authorName}>— {authorName}</p>
    </figure>
  );
}

function Gallery() {
  const imgs = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className={styles.gallery}>
      {imgs.map(img => (
        <figure className={styles.galleryItem} key={img}>
          <img
            className={styles.galleryImg}
            src={`../../img/gallery/gallery-${img}.jpg`}
          />
        </figure>
      ))}
    </div>
  );
}
