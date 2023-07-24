import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

import styles from './footer.module.css';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerLinks}>
      <li>
        <Link href='/faq' className={classNames(styles.footerLink, 'hover')}>
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
