import React from 'react';
import styles from './Repo.module.css';
import classnames from 'classnames';
import RepoItem from '../RepoItem/RepoItem.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorImg from '../../img/error.png'
import Octokit from '@octokit/rest';

const octokit = new Octokit();

class Repo extends React.Component {
	
	state = {
		isLoading: true,
		notFound: false,
	}

	componentDidMount() {
		const user = 'eugenia1190';

		octokit.repos.listForUser({
			username: user
		})
		.then(({ data }) => {
				this.setState({
				repoList: data,
				isLoading: false
			})
		})
		.catch(() => {
			this.setState({ 
				isLoading: false,
				notFound: true, 
			})
		})
	}

	render() {
		const { isLoading, repoList, notFound } = this.state;

		return (
			<div className = {styles.wrap}>
				<h2 className = {styles.title}>Репозитории на <a href='https://github.com/' className = {styles.link}>github.com</a></h2>
				<div className = {
						classnames({
							[styles.content]: true,
							[styles.norepo]: (!isLoading && notFound) || (isLoading && !notFound),
						})}>
					{isLoading && !notFound && <CircularProgress />}
					{!isLoading && notFound && 
						<div>
							<img src = {ErrorImg} alt='error' className={styles.error} />
							<p className = {styles.subtitle}>Что-то пошло не так...</p>
							<p className = {styles.text}>Попробуйте <span onClick = {() => window.location.reload()} className = {
								classnames({
									[styles.text]: true,
									[styles.link]: true,})}>загрузить</span> еще раз</p>
						</div>}
					{!isLoading && !notFound &&
					<div>
						<ul className = {styles.list}>
							{repoList.map(repo => (
								<li key={repo.id}>
									<RepoItem 
										value = {repo.name}
										homepage = {repo.homepage}
										repoUrl = {repo.html_url} 
										language = {repo.language}
										stargazers = {repo.stargazers_count}
										forks = {repo.forks_count}
										update = {repo.updated_at}										
									/>
								</li>
							))}
						</ul> 
					</div>} 
				</div>
			</div>
		);
	}
}


// {isLoading  ? <CircularProgress />}

export default Repo;