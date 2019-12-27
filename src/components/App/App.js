import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import styles from './App.module.css';

const App = () =>
(<Router>
	<div className={styles.wrapper}>
		<div className={styles.sidebar}>
			<MenuList>
				<Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
				<Link to='/todo' className={styles.link}><MenuItem>Мои задачи</MenuItem></Link>
				<Link to='/contacts' className={styles.link}><MenuItem>Мои контакты</MenuItem></Link>
			</MenuList>
		</div>
		<div className={styles.wrap}>
			<Route path='/' exact component={About} />
			<Route path='/todo' component={Todo} />
			<Route path='/contacts' component={Contacts} />
		</div>
	</div>
</Router>)

export default App;