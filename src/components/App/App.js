import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';




const App = () => {

return(<Router>
	<div className={styles.wrap}>
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<Link to='/' className={styles.link}><button className={styles.btn}>Обо мне</button></Link>
				<Link to='/todo' className={styles.link}><button className={styles.btn}>Мои задачи</button></Link>
			</div>
			<div>
				<Route path='/' exact component={About} />
				<Route path='/todo' component={Todo} />
			</div>
		</div>
	</div>
</Router>)}

export default App;