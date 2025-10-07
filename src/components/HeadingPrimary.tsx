import clsx from 'clsx';
import styles from './HeadingPrimary.module.css';

type HeadingPrimaryProps = {
  children: React.ReactNode;
  subHeading: string;
  centerText?: boolean;
};

export default function HeadingPrimary({
  children,
  subHeading,
  centerText = false,
}: HeadingPrimaryProps) {
  return (
    <div className={clsx(styles.container, centerText && styles.centerText)}>
      <span className={styles.subHeading}>{subHeading}</span>
      <h2 className={styles.heading}>{children}</h2>
    </div>
  );
}

type HeadingProps = {
  type?: 'h3' | 'h4';
  children: React.ReactNode;
};

export function Heading({ type = 'h3', children }: HeadingProps) {
  const Tag = type;
  return <Tag className={styles[type]}>{children}</Tag>;
}
