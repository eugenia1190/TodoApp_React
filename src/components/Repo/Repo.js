import React from 'react';
import styles from './Repo.module.css';
import classnames from 'classnames';
import RepoItem from '../RepoItem/RepoItem.js';

const Repo = ( { isLoading, repoList, notFound } ) => {
	return (
		<div className = {styles.wrap}>
			<h2 className = {styles.title}>Репозитории на <a href='https://github.com/' className = {styles.link}>github.com</a></h2>
			<div className = {
					classnames({
						[styles.content]: true,
						[styles.norepo]: (!isLoading && notFound) || (isLoading && !notFound),
					})}>
				
				<div>
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
			</div>
		</div>
	);
}

export default Repo;
