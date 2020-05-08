import React from 'react';
import styles from './Repo.module.css';
import RepoItem from '../RepoItem/RepoItem.js';
import CircularProgress from '@material-ui/core/CircularProgress';
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
				<div className = {styles.container}>
					{isLoading && !notFound && <div className = {styles.preloader}><CircularProgress /></div>}
					{!isLoading && notFound && <div>Информация о пользователе не доступна</div>}
					{!isLoading && !notFound &&
					<div>
						<ul className = {styles.list}>
							{repoList.map(repo => (
								<li key={repo.id}>
									<RepoItem 
										value = {repo.name}
										href = {repo.html_url} 
										language = {repo.language}
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