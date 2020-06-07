import React from 'react';
import classnames from 'classnames';

import styles from './Repo.module.css';
import RepoItem from '../RepoItem/RepoItem.js';
import ErrorImg from '../../img/error.png';

const Repo = ( { isLoading, repoList, notFound, buttonClickForward, buttonClickBack, page, countOfPage } ) => {
	return (
		<div className = {styles.wrap}>
			<h2 className = {styles.title}>Репозитории на <a href='//github.com/'  target='_blank' rel='noopener noreferrer' className = {styles.link}>github.com</a></h2>
			
			<div className = {styles.content}>
				{repoList.length === 0 && 
				<div className={styles.container}>
					<img src={ErrorImg} alt='error' className={styles.error} />
					<p className = {styles.subtitle}>Репозитории отсутствуют</p>
					<p className = {styles.text}>Добавьте как минимум один репозиторий на <a href='//github.com' target='_blank' rel='noopener noreferrer' className = {styles.subtitleLink}>github.com</a></p>
				</div>}
				<ul className = {styles.list}>
					{repoList.map(repo => (
						<li key={repo.id}>
							<RepoItem 
								value = {repo.name}
								homepage = {repo.homepage}
								repoUrl = {repo.html_url}
								description = {repo.description} 
								language = {repo.language}
								stargazers = {repo.stargazers_count}
								forks = {repo.forks_count}
								update = {repo.updated_at}										
							/>
						</li>
					))}
				</ul> 
			</div> 
			<div className={styles.btnWrap}>
				<button
					className={
						classnames({
							[styles.btn]: true,
							[styles.btnBlocked]: (page === 0),
						})} 
					onClick={buttonClickBack}>Назад</button>
				<button
					className={
						classnames({
							[styles.btn]: true,
							[styles.btnBlocked]: (page === (countOfPage - 1)),
						})} 
					onClick={buttonClickForward}>Далее</button>
			</div>
			
		</div>
	);
}

export default Repo;
