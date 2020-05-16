import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = () => (
	<div>
		<p className={styles.tooltip}>Такая задача уже есть в вашем<br />списке. Введите другое название</p>
	</div>
);

export default Tooltip;