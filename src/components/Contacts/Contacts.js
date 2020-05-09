import React from 'react';
import styles from './Contacts.module.css';
import mailIcon from '../../img/mail.png';
import telegramIcon from '../../img/telegram.png';


class Contacts extends React.Component {

	state = {};

	componentDidMount() {
		const user = 'eugenia1190';
		const url = 'https://api.github.com/users/'+ user;

		fetch(url)
			.then (res => res.json())
			.then (json => {
				this.setState({
					bio: json.bio,
					avatar: json.avatar_url
				});
			});
	}

  	render() {
 			
 		const { bio, avatar } = this.state;

 		return(
 			<div className={styles.wrap}>
				<img src = {avatar} alt = "avatar" className = {styles.avatar}  />
				<div>
					<h1 className = {styles.title}>Евгения Петухова</h1>
					<p> {bio} </p>
					<div>
						<div className = {styles.socials} >
							<img src = {mailIcon} alt = "mail" className = {styles.icon} />
							<a href='mailto:>chet444@mail.ru' className = {styles.link}>chet444@mail.ru</a>
						</div>
						<div className = {styles.socials} >
							<img src = {telegramIcon} alt = "telegram"  className = {styles.icon} />
							<a href='https://tlgg.ru/eugenia1190' className = {styles.link}>+7 (982) 576-49-33</a>
						</div>
					</div>
				</div>
			</div>
		)
 	}
}

export default Contacts;