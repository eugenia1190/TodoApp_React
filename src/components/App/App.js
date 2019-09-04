import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state ={
		items: [
			{
				value: 'Написать новое приложение',
				isDone: false
			},
			{
				value: 'прописать props-ы',
				isDone: true
			},
			{
				value: 'доделать остальные дела',
				isDone: false
			}
		]
	};
	
	render () {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Все мои задачи:</h1>
				<InputItem />
				<ItemList 
					items= {this.state.items} 
				/> 
				<Footer count={3} />
			</div>
		);
	}
}

export default App;