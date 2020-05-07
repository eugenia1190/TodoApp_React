import React from 'react';
import styles from './About.module.css';
import Contacts from '../Contacts/Contacts.js';
import Repo from '../Repo/Repo.js'

const About = () => (
	<div className = {styles.wrap} >
		<Contacts />
		<Repo />
	</div>
)

export default About;