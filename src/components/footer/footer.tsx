import React from 'react';
import classNames from 'classnames';

import styles from './footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerLinks}>
      <li>
        <Link href='/qna' className={classNames(styles.footerLink, 'hover')}>
          Вопросы-ответы
        </Link>
      </li>
      <li>
        <Link href='/about' className={classNames(styles.footerLink, 'hover')}>
          О нас
        </Link>
      </li>
    </ul>
  </footer>
);

export default Footer;
