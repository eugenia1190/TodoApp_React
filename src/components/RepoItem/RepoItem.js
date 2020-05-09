import React from 'react';
import styles from './RepoItem.module.css';
import classnames from 'classnames';

const transformDate = (prop) => {
	const date =  new Date(Date.parse(prop));
	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timezone: 'UTC',
	};
	const newDate = date.toLocaleString('en-GB', options );

	return newDate;
}

const RepoItem = ({href, value, language, update}) => (
	<div className = {styles.wrap}>
		<a href={href} className = {styles.link}>{value}</a>
		<div className = {styles.info}>
			<div className = {styles.language}><div className = {
				classnames({
					[styles.circle]: true,
					[styles.html]: language === 'HTML',
					[styles.css]: language === 'CSS',
					[styles.js]: language === 'JavaScript',
				})}></div>{language}</div>
			<div>Updated on {transformDate(update)}</div>
		</div>
	</div>
);

export default RepoItem;
