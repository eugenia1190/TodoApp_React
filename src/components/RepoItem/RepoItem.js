import React from 'react';
import styles from './RepoItem.module.css';
import classnames from 'classnames';
import Stargazers from '../../img/star.png';
import Forks from '../../img/fork.png';

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

const RepoItem = ({repoUrl, value, language, stargazers, forks, update}) => (
	<div className = {styles.wrap}>
		<a href={repoUrl} className = {styles.link}>{value}</a>
		<div className = {styles.info}>
			<div className = {styles.parameter}>
				<div className = {
					classnames({
						[styles.circle]: true,
						[styles.html]: language === 'HTML',
						[styles.css]: language === 'CSS',
						[styles.js]: language === 'JavaScript',
					})}>
				</div>{language}</div>
			<div className={styles.parameter}>
				<img src={Stargazers} alt="stargazers" className = {styles.icon} />
				<div>{stargazers}</div>
			</div>
			<div className={styles.parameter}>
				<img src={Forks} alt="forks" className = {styles.icon} />
				<div>{forks}</div>
			</div>
			<div>Updated on {transformDate(update)}</div>
		</div>
	</div>
);

export default RepoItem;
