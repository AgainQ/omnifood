import { Check } from 'lucide-react';
import styles from './List.module.css';

export default function List({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map(i => (
        <li className={styles.item} key={i}>
          <Check size={30} strokeWidth={1.8} />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
