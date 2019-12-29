import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@octokit/rest';
import styles from './About.module.css';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'eugenia1190'
		}).then(({ data }) => {this.setState({
			repoList: data,
			isLoading: false
		})});
	}

	render() {
		const { isLoading, repoList } = this.state;

		return (
			<div>
				<h1>{ isLoading  ? <CircularProgress /> : 'Обо мне' }</h1>
				<div>{!isLoading &&
					<ol>
						{repoList.map(repo => (<li key={repo.id}><a href={repo.html_url}  className={styles.link}>
							{repo.name}
						</a></li>))}
					</ol>} 
				</div>
			</div>

		);
	}
}

export default About;