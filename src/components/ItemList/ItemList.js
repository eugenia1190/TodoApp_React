import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
	<ul className={styles.itemList}>
	{items.map(item =><li className={styles.item} key={item.id}> 
		<Item 
			value={item.value}
			isDone={item.isDone}
			id={item.id}
			onClickDone ={onClickDone}
			onClickDelete={onClickDelete}
		/> 
		</li>)}
	</ul>);

ItemList.defaultProps = {
	items: [
		{
			value: "Несуществующая задача"
		}]
};

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};



export default ItemList;