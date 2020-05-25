import React, {useState} from 'react';
import classnames from 'classnames';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import ErrorImg from '../../img/error.png';
import styles from './Todo.module.css';

const Todo = () => {
	const initialState = {
		items: (JSON.parse(localStorage.getItem('items')) || []),
		count: (JSON.parse(localStorage.getItem('count')) || 0),
		displayItems: 'all',
	};

	const [items, setItems] = useState(initialState.items);
	const [count, setCount] = useState(initialState.count);
	const [displayItems, setDisplayItems] = useState(initialState.displayItems);

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item};

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		setItems(newItemList);
		localStorage.setItem('items', JSON.stringify(newItemList));
	}

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !== id);

		setItems(newItemList);
		setCount(count => count - 1);
		localStorage.setItem('items', JSON.stringify(newItemList));
		localStorage.setItem('count', JSON.stringify(count - 1));
	}

	const onClickAdd = value =>  {
		
		if (items.some((item)=>( value.toLowerCase() === item.value.toLowerCase()))) {
			return 'error';
		} else {
			const newItemList = [
				...items,
				{
					value,
					isDone: false,
					isEdited: false,
					id: count + 1,
				}
			];
			setItems(newItemList);
			setCount(count => count + 1);
			localStorage.setItem('items', JSON.stringify(newItemList));
			localStorage.setItem('count', JSON.stringify(count + 1));
		}
	}

	const onItemDoubleClick = (value, id, event) => {

		const newItemList = items.map(item => {
				
				const newItem = { ...item};
	
				if (item.id === id) { newItem.isEdited = !newItem.isEdited }
	
				return newItem;
			});
		
		setItems(newItemList);

	}


	const changeItem = (value, id) => {
		const newItemList = items.map(item => {
				const newItem = { ...item};
	
				if (item.id === id) {
					newItem.value = value;
					newItem.isEdited = !newItem.isEdited;
				}
	
				return newItem;
			});

		setItems(newItemList);
		localStorage.setItem('items', JSON.stringify(newItemList));
	}

	const itemsIsDone = items.filter(item => item.isDone === true);
	const itemsIsNotDone = items.filter(item => item.isDone === false);
	const itemsAll = items;
	let selectedItems = (displayItems ==='isDone') ? itemsIsDone : (displayItems === 'isNotDone') ? itemsIsNotDone : itemsAll;		

	const countIsDone =  items.filter(item => item.isDone === true).length;

	return (
		<div className = {styles.wrap} >
			<div className = {styles.menu}>
				<Header />
				<div className = {styles.btnContainer}>
					<button className = {
						classnames({
							[styles.btn]: true,
							[styles.btnSelected]: (displayItems === 'isDone'),
						})} onClick = {() => setDisplayItems('isDone')} >Завершенные <span className = {
						classnames({
							[styles.count]: true,
							[styles.countSelected]: (displayItems === 'isDone'),
						})}>{countIsDone}</span></button>
					<button className = {
						classnames({
							[styles.btn]: true,
							[styles.btnSelected]: (displayItems === 'isNotDone'),
						})} onClick = {() => setDisplayItems('isNotDone')} >Незавершенные <span className = {
						classnames({
							[styles.count]: true,
							[styles.countSelected]: (displayItems === 'isNotDone'),
						})}>{count - countIsDone}</span></button>
					<button className = {
						classnames({
							[styles.btn]: true,
							[styles.btnSelected]: (displayItems === 'all'),
						})} onClick = {() => setDisplayItems('all')}>Все <span className = {
						classnames({
							[styles.count]: true,
							[styles.countSelected]: (displayItems === 'all'),
						})}>{count}</span></button>
				</div>
			</div>
			{count === 0 &&
			<div className={styles.container}>
				<img src={ErrorImg} alt='error' className={styles.error} />
				<p className = {styles.subtitle}>Вы ещё не добавили ни одной задачи</p>
				<p className = {styles.text}>Сделайте это прямо сейчас!</p>
			</div>}
			{count !==0 &&
			<ItemList 
				items= {selectedItems}
				onClickDone={onClickDone}
				onClickDelete ={onClickDelete}
				onItemDoubleClick={onItemDoubleClick}
				changeItem={changeItem}
			/> }
			<InputItem onClickAdd={onClickAdd} />
		</div>
	);
}

export default Todo;
