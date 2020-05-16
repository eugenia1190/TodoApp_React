import React, {useState, useEffect} from 'react';
import Octokit from '@octokit/rest';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';
import classnames from 'classnames';
import Contacts from '../Contacts/Contacts.js';
import Repo from '../Repo/Repo.js'
import ErrorImg from '../../img/error.png'

const octokit = new Octokit();

const About = () => {
	
	const initialState = {
		isLoading: true,
		notFound: false,
		bio: [],
		avatar: [],
		repoList: [],
	}

	const [isLoading, setIsLoading] = useState(initialState.isLoading);
	const [notFound, setNotFound] = useState(initialState.notFound);
	const [bio, setBio] = useState(initialState.bio);
	const [avatar, setAvatar] = useState(initialState.avatar);
	const [repoList, setRepoList] = useState(initialState.repoList);

	useEffect(() => {
		const user = 'eugenia1190';
		const url = 'https://api.github.com/users/'+ user;

		fetch(url)
			.then (res => res.json())
			.then (json => {
				setBio(json.bio);
				setAvatar(json.avatar_url)
			});

		octokit.repos.listForUser({
			username: user
		})
		.then(({ data }) => {
				setRepoList(data);
				setIsLoading(false);
		})
		.catch(() => {
				setNotFound(true);
				setIsLoading(false)
		})

	}, []);


	return(
		<div  className = {styles.wrap}>
			{isLoading && !notFound && <div className={styles.container}><CircularProgress /></div>}
			{!isLoading && notFound && 
			<div className={styles.container}>
				<img src = {ErrorImg} alt='error' className={styles.error} />
				<p className = {styles.subtitle}>Что-то пошло не так...</p>
				<p className = {styles.text}>Попробуйте <span onClick = {() => window.location.reload()} className = {
			 		classnames({
			 			[styles.text]: true,
			 			[styles.link]: true,})}>загрузить</span> еще раз</p>
			</div>}
			{!isLoading && !notFound &&
			<div>
				<Contacts 
					bio={bio}
					avatar={avatar}
				/>
				<Repo 
					isLoading = {isLoading}
					repoList = {repoList}
					notFound = {notFound}
				/>
			</div>}
		</div>
	)
}

export default About;