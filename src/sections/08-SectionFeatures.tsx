import {
  Infinity as InfinityIcon,
  Apple,
  Leaf,
  Pause,
  type LucideIcon,
} from 'lucide-react';

import styles from './08-SectionFeatures.module.css';
import clsx from 'clsx';

const features = [
  {
    Icon: InfinityIcon,
    title: 'Never cook again!',
    text: 'Our subscriptions cover 365 days per year, even including major holidays.',
  },
  {
    Icon: Apple,
    title: 'Local and organic',
    text: 'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },
  {
    Icon: Leaf,
    title: 'No waste',
    text: 'All our partners only use reusable containers to package all your meals.',
  },
  {
    Icon: Pause,
    title: 'Pause anytime',
    text: 'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
];

export default function SectionFeatures() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.features, 'container')}>
        {features.map(feature => (
          <Feature feature={feature} key={feature.title} />
        ))}
      </div>
    </section>
  );
}

type FeatureT = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

function Feature({ feature }: { feature: FeatureT }) {
  const { Icon, title, text } = feature;

  return (
    <div className={styles.feature}>
      <div className={styles.iconBox}>
        <Icon size={32} color={'#e67e22'} strokeWidth={1.6} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
