import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { Drawer } from 'vaul';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import styles from './01-Navigation.module.css';

// plain html/css is easier to implement in this case
// it is overkill, because it is just static site and this data will never be changed
const links = [
  { text: 'Home', to: '/' },
  { text: 'Meals', to: '/meals' },
  { text: 'Testimonials', to: '/testimonials' },
  { text: 'Pricing', to: '/pricing' },
  { text: 'Try for free', to: '/try', isCta: true },
];

export default function Navigation() {
  const matches = useMediaQuery('(max-width: 59em)');
  // is current viewport width less than 940px?

  console.log(styles);
  console.log(styles.menut);

  return (
    <nav className={styles.nav}>
      <img src='../../img/omnifood-logo.png' className={styles.logo} />

      {!matches && (
        <ul className={styles.navLinks}>
          {links.map(({ text, to, isCta }) => (
            <li key={text}>
              <NavLink to={to} className={clsx(styles.navLink, isCta && styles.cta)}>
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {matches && (
        <Drawer.Root direction='right'>
          <Drawer.Trigger className={styles.menuBtn}>
            <Menu size={32} />
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className={styles.drawerOverlay} />
            <Drawer.Content className={styles.drawerContent}>
              <ul className={styles.menuLinks}>
                {links.map(({ text, to, isCta }) => (
                  <li key={text}>
                    <NavLink
                      to={to}
                      className={clsx(styles.menuLink, isCta && styles.cta)}
                    >
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <Drawer.Close className={styles.drawerBtnClose}>
                <X size={40} />
              </Drawer.Close>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </nav>
  );
}
