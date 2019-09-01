import React from 'react';
import Item from '../Item/Item';
import Checkboxes from '../Checkbox/Checkbox';
import DeleteIcons from '../DeleteIcon/DeleteIcon';
import styles from './ItemList.module.css';

const ItemList = ({ items }) => (
	<ul className={styles.itemList}>
	{items.map(item =><li className={styles.item} key={item.value}><Checkboxes />  <Item value={item.value} isDone={item.isDone} /> <DeleteIcons /></li>)}
	</ul>);

export default ItemList;