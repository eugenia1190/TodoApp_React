import React from 'react';
import styles from './Tooltip.module.css';

const Tooltip = ({noValue}) => (
	<div>
		<p className={styles.tooltip}>
			{noValue && 'Вы не ввели значение!'}
			{!noValue && 'Такая задача уже есть в вашем списке. Введите другое название'}
		</p>
	</div>
);

export default Tooltip;