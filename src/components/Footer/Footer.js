import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count, onClickFooter }) => (<div className={styles.footer}>Невыполненные задачи: {count}</div>);

export default Footer;