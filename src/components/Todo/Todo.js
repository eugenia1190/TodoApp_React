import React, {useState, useEffect} from 'react';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const Todo = () => {
	const initialState = {
		items: [
			{
				value: 'Написать новое приложение',
				isDone: true,
				id: 1,

			},
			{
				value: 'прописать props-ы',
				isDone: false,
				id: 2,

			},
			{
				value: 'доделать остальные дела',
				isDone: false,
				id: 3,

			}
		],
		count: 3
	};

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);

	useEffect(() => {console.log('componentDidMount')}, []);
	useEffect(() => {console.log('componentDidUpdate')}, [items]);
	
	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item};

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		setItems(newItemList);
	}

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !== id);

		setItems(newItemList);
		setCount(count => count - 1);
	}

	const onClickAdd = value =>  {
		const newItemList = [
			...items,
			{
				value,
				isDone: false,
				id: count + 1
			}
		];
		setItems(newItemList);
		setCount(count => count + 1);
	}

	
		
	return (
		<div>
			<Header />
			<InputItem onClickAdd={onClickAdd} />
			<ItemList 
				items= {items}
				onClickDone={onClickDone}
				onClickDelete ={onClickDelete}
			/> 
			<Footer count= {count} />
		</div>
	);
}

export default Todo;
