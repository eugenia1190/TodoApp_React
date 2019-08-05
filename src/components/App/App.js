import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Написать новое приложение';

const App = () => {
	const items = [
		{
			value: 'Написать новое приложение'
		},
		{
			value: 'прописать props-ы'
		},
		{
			value: 'доделать остальные дела'
		}
		
	];


	return (
	<div>
		<h1>Все мои задачи:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count={3} />
	</div>);
}
export default App;