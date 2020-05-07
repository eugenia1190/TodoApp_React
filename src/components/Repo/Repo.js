import React from 'react';
import styles from './Repo.module.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';

const octokit = new Octokit();

class Repo extends React.Component {
	
	state = {
		isLoading: true,
	}

	componentDidMount() {
		const user = 'eugenia1190';
		const url = 'https://api.github.com/users/'+ user;

		octokit.repos.listForUser({
			username: user
		}).then(({ data }) => {this.setState({
			repoList: data,
			isLoading: false
		})});

		fetch(url)
			.then (res => res.json())
			.then (json => {
				if (json.message === 'Not Found') {
					this.setState ({
						notFound: true,
						isLoading: false
					})
				} else {
					this.setState({
						bio: json.bio,
						avatar: json.avatar_url
					})
				}});

	}

	render() {
		const { isLoading, repoList, notFound } = this.state;

		return (
			<div className = {styles.wrap}>
				<h2 className = {styles.title}>Репозитории на <a href='https://github.com/' className = {styles.link}>github.com</a></h2>
				<div>
					{!isLoading && notFound && <div>Информация о пользователе не доступна</div>}
					{!isLoading && !notFound &&
					<div>
						<ol>
							{repoList.map(repo => (
								<li key={repo.id}>
									<a href={repo.html_url} className = {styles.link}>{repo.name}</a>
								</li>
							))}
						</ol> 
					</div>} 
				</div>
			</div>
		);
	}
}


// {isLoading  ? <CircularProgress />}

export default Repo;