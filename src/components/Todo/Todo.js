import React from 'react';

import Header from '../Header/Header';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

class Todo extends React.Component {
	state = {
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

	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item};

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList });
	}

	onClickDelete = id => {
		const newItemList = this.state.items.filter(item => item.id !== id);

		this.setState({ items: newItemList });
	}

	onClickAdd = value => this.setState(state => ({
		items: [
			...state.items,
			{
				value,
				isDone: false,
				id: state.count + 1
			}
		],
		count: state.count + 1
	}))

	
		
	render () {
		return (
			<div>
				<Header />
				<InputItem onClickAdd={this.onClickAdd} />
				<ItemList 
					items= {this.state.items}
					onClickDone={this.onClickDone}
					onClickDelete ={this.onClickDelete}
				/> 
				<Footer count= {this.state.count} />
			</div>
		);
	}
}

export default Todo;
