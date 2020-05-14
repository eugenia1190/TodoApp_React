import React, {useState, useEffect} from 'react';
import Octokit from '@octokit/rest';
import styles from './About.module.css';
import Contacts from '../Contacts/Contacts.js';
import Repo from '../Repo/Repo.js'

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
				setIsLoading(false)
		})
		.catch(() => {
				setNotFound(true);
				setIsLoading(false)
		})

	}, []);


	return(
		<div className = {styles.wrap} >
			<Contacts 
				bio={bio}
				avatar={avatar}
			/>
			<Repo 
				isLoading = {isLoading}
				repoList = {repoList}
				notFound = {notFound}
			/>
		</div>)
}

export default About;