import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
	<ul className={styles.itemList}>
	{items.map(item =><li className={styles.item} key={item.value}> 
		<Item 
			value={item.value}
			isDone={item.isDone}
			id={item.id}
			onClickDone ={onClickDone}
			onClickDelete={onClickDelete}
		/> 
		</li>)}
	</ul>);

export default ItemList;