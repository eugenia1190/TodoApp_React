import React from 'react';
import styles from './RepoItem.module.css';

const RepoItem = ({href, value, language, update}) => (
	<div className = {styles.wrap}>
		<a href={href} className = {styles.link}>{value}</a>
		<div className = {styles.info}>
			<div>{language}</div>
			<div>Updated on {update}</div>
		</div>
	</div>

);

export default RepoItem;