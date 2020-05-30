import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Footer from '../Footer/Footer';

import styles from './App.module.css';
import '../../fonts/fonts.css';

const App = () => {

return(<Router>
	<div className={styles.wrap}>
	<div className={styles.inner}>
		<nav className={styles.nav}>
			<NavLink exact to='/'
				className={styles.link}
				activeClassName={styles.linkActive}>Обо мне</NavLink>
			<NavLink to='/todo'
				className={styles.link}
				activeClassName={styles.linkActive}>Мои задачи</NavLink>
		</nav>
		<div className={styles.content}>
			<Route path='/' exact component={About} />
			<Route path='/todo' component={Todo} />
		</div>
		<Footer />
	</div>
	</div>
</Router>)}

export default App;
