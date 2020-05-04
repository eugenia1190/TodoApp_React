import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
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
		const { isLoading, repoList, bio, avatar, notFound } = this.state;

		return (
			<div>
				<h1 className={styles.title}>{ isLoading  ? <CircularProgress /> : 'Обо мне' }</h1>
				<div>
					{!isLoading && notFound && <div>Информация о пользователе не доступна</div>}
					{!isLoading && !notFound &&
					<div>
						<img src={avatar} alt="avatar" className={styles.avatar} />
						<p> {bio} </p>
						<h2>Мои репозитории:</h2>
						<ol>
							{repoList.map(repo => (<li key={repo.id}><a href={repo.html_url}  className={styles.link}>
								{repo.name}
							</a></li>))}
						</ol> 
					</div>} 
				</div>
			</div>

		);
	}
}

export default About;