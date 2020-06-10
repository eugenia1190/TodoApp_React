import React, {useState, useEffect} from 'react';

import classnames from 'classnames';
import Octokit from '@octokit/rest';

import CircularProgress from '@material-ui/core/CircularProgress';
import Contacts from '../Contacts/Contacts.js';
import Repo from '../Repo/Repo.js';
import styles from './About.module.css';
import ErrorImg from '../../img/error.png';

const octokit = new Octokit();

const About = () => {
	
	const initialState = {
		isLoading: true,
		notFound: false,
		name:[],
		bio: [],
		avatar: [],
		repoList: [],
		page: 0,
	}

	const [isLoading, setIsLoading] = useState(initialState.isLoading);
	const [notFound, setNotFound] = useState(initialState.notFound);
	const [bio, setBio] = useState(initialState.bio);
	const [avatar, setAvatar] = useState(initialState.avatar);
	const [repoList, setRepoList] = useState(initialState.repoList);
	const [name, setName] = useState(initialState.name);
	const [page, setPage] = useState(initialState.page);

	useEffect(() => {
		const user = 'eugenia1190';
		const url = 'https://api.github.com/users/'+ user;

		fetch(url)
			.then (res => res.json())
			.then (json => {
				setName(json.name);
				setBio(json.bio);
				setAvatar(json.avatar_url);
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

	const reposOnPage = 3;
	const countOfPage = Math.ceil(repoList.length / reposOnPage);

	const displayRepo = () => {
		const startRepo = page * reposOnPage;
		const newRepoList = repoList.slice(startRepo,(startRepo + reposOnPage));
		return newRepoList;
	}

	const buttonClickForward = () => {	page < countOfPage - 1 && setPage(page + 1) }

	const buttonClickBack = () => {	page !== 0 && setPage(page - 1) }

	return(
		<div className = {styles.wrap}>
			{isLoading && !notFound && <div className={styles.container}><CircularProgress /></div>}
			{!isLoading && notFound && 
			<div className={styles.container}>
				<img src = {ErrorImg} alt='error' className={styles.error} />
				<p className={styles.subtitle}>Что-то пошло не так...</p>
				<p className={styles.text}>Попробуйте <span onClick={() => window.location.reload()} className={
			 		classnames({
			 			[styles.text]: true,
			 			[styles.link]: true,})}>загрузить</span> еще раз</p>
			</div>}
			{!isLoading && !notFound &&
			<div className={styles.contentContainer}>
				<Contacts 
					name={name}
					bio={bio}
					avatar={avatar}
				/>
				<Repo 
					isLoading={isLoading}
					repoList={displayRepo()}
					notFound={notFound}
					buttonClickForward={buttonClickForward}
					buttonClickBack={buttonClickBack}
					page={page}
					countOfPage={countOfPage}
				/>
			</div>}
		</div>
	)
}

export default About;
