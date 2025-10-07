import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import styles from './10-Footer.module.css';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={clsx('container', styles.container)}>
        <div>
          <img className={styles.logo} src='../../img/omnifood-logo.png' />

          <ul className={styles.socialLinks}>
            <li>
              <a href='#' className={styles.link}>
                <Instagram />
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                <Facebook />
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                <Twitter />
              </a>
            </li>
            <li>
              <a href='#' className={styles.link}>
                <Linkedin />
              </a>
            </li>
          </ul>

          <p className={styles.copyright}>
            Copyright © 2025 by Omnifood, Inc. All rights reserved.
          </p>
        </div>

        <div>
          <p className={styles.title}>Contact us</p>
        </div>

        <div>
          <p className={styles.title}>Account</p>

          <ul className={styles.linksList}>
            <li>
              <a className={styles.link} href='#'>
                Create account
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Sign in
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                iOS app
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Android app
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.title}>Company</p>

          <ul className={styles.linksList}>
            <li>
              <a className={styles.link} href='#'>
                About Omnifood
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                For Business
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Cooking partners
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.title}>Resources</p>

          <ul className={styles.linksList}>
            <li>
              <a className={styles.link} href='#'>
                Recipe directory
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Help center
              </a>
            </li>
            <li>
              <a className={styles.link} href='#'>
                Privacy & terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
