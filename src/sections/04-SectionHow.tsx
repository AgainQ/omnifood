// react-my
import { useGetSteps } from '../hooks/useGetSteps';
// components
import HeadingPrimary from '../components/HeadingPrimary';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Heading } from '../components/HeadingPrimary';
import styles from './04-SectionHow.module.css';
// else
import type { StepT } from '../types/types';

export default function SectionHow() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <HeadingPrimary subHeading='How it works'>
          Your daily dose of health in 3 simple steps
        </HeadingPrimary>

        <Steps />
      </div>
    </section>
  );
}

function Steps() {
  const { steps, isLoading, error } = useGetSteps();

  if (isLoading) return <Loader />;
  if (error) return <Message>{error.message}</Message>;

  return (
    <div className={styles.steps}>
      {steps?.map(step => (
        <Step step={step} key={step.number} />
      ))}
    </div>
  );
}

function Step({ step }: { step: StepT }) {
  const isEven = step.number % 2 === 0;
  return (
    <div className={styles.step}>
      {!isEven && (
        <>
          <TextBox step={step} />
          <ImgBox img={step.img} />
        </>
      )}

      {isEven && (
        <>
          <ImgBox img={step.img} />
          <TextBox step={step} />
        </>
      )}
    </div>
  );
}

function TextBox({ step }: { step: StepT }) {
  const { number, title, text } = step;
  return (
    <div className={styles.textBox}>
      <p className={styles.number}>0{number}</p>
      <Heading type='h3'>{title}</Heading>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

function ImgBox({ img }: { img: string }) {
  return (
    <div className={styles.imgBox}>
      <img className={styles.stepImg} src={img} />
    </div>
  );
}
