import React from 'react';
import classNames from 'classnames';

import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footerLinks}>
      <li>
        <a href='#' className={classNames(styles.footerLink, 'hover')}>
          Вопросы-ответы
        </a>
      </li>
      <li>
        <a href='#' className={classNames(styles.footerLink, 'hover')}>
          О нас
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
