import React from 'react';
import styles from './Contacts.module.css';
import mailIcon from '../../img/mail.png';
import telegramIcon from '../../img/telegram.png';
import githubIcon from '../../img/github.png';
import vkIcon from '../../img/vk.png';


const Contacts = ({ name, bio, avatar }) => {
 	return(
 		<div className={styles.wrap}>
			<img src = {avatar} alt = "avatar" className = {styles.avatar}  />
			<div>
				<h1 className = {styles.title}>{name}</h1>
				<p className = {styles.bio}> {bio} </p>
				<div>
					<div className = {styles.contacts} >
						<img src = {mailIcon} alt = "mail" className = {styles.contactsIcon} />
						<a href='mailto:>eugenia1190@gmail.com' className = {styles.link}>eugenia1190@gmail.com</a>
					</div>
					<div className = {styles.contacts} >
						<img src = {telegramIcon} alt = "telegram"  className = {styles.contactsIcon} />
						<a href='https://tlgg.ru/eugenia1190' className = {styles.link}>+7 (982) 576-49-33</a>
					</div>
				</div>
				<div className = {styles.socials}>
					<a href='//github.com/eugenia1190'><img src={githubIcon} alt='github' className = {styles.socialsIcon} /></a>
					<a href='//vk.com/chetvert'><img src={vkIcon} alt='vk' className = {styles.socialsIcon} /></a>
				</div>
			</div>
		</div>
	)
}

export default Contacts;