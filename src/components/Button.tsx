import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
};

export default function Button({ children, type = 'primary' }: ButtonProps) {
  return <button className={clsx(styles.btn, styles[type])}>{children}</button>;
}
