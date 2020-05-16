import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import styles from './App.module.css';
import classnames from 'classnames';
import '../../fonts/fonts.css';




const App = () => {

	const initialState = {
		display: 'todo',
	}

	const [display, setDisplay] = useState(initialState.display);

return(<Router>
	<div className={styles.wrap}>
		<div className={styles.sidebar}>
			<Link to='/' className={styles.link}><button 
				className={ 
					classnames({
						[styles.btn] : true,
						[styles.btnActive] : (display === 'about'),
					})}
				onClick = {() => setDisplay('about')}>Обо мне</button></Link>
			<Link to='/todo' className={styles.link}><button
				className={
					classnames({
						[styles.btn] : true,
						[styles.btnActive] : (display === 'todo'),
					})}
				onClick={() => setDisplay('todo')}>Мои задачи</button></Link>
		</div>
		<div className={styles.content}>
			<Route path='/' exact component={About} />
			<Route path='/todo' component={Todo} />
		</div>
		<div>Выполнено в <a href='//webheroschool.ru' className={styles.link}>Web Hero School</a></div>
	</div>
</Router>)}

export default App;