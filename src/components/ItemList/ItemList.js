import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable} from 'react-beautiful-dnd';

import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete, onItemDoubleClick, changeItem, checkItems }) => (
	<Droppable droppableId={'itemlist'}>
		{ provided => (
			<ul 
				className={styles.itemlist} 
				ref={provided.innerRef}
				{...provided.droppableProps}
			>
				{items.map((item, index) => (
					<Draggable
						key={item.id}
						draggableId={'item-' + item.id}
						index={index}
					>
						{ provided => (
							<li	
								className={styles.item}
								{...provided.draggableProps}
								{...provided.dragHandleProps}
								ref={provided.innerRef}
							> 
								<Item 
									value={item.value}
									isClicked={item.isClicked}
									isDone={item.isDone}
									id={item.id}
									isEdited={item.isEdited}			
									onClickDone ={onClickDone}
									onClickDelete={onClickDelete}
									onItemDoubleClick={onItemDoubleClick}
									changeItem={changeItem}
									checkItems={checkItems}
								/> 
							</li>
						)}
					</Draggable>))}
				{provided.placeholder}
			</ul>
		)}
	</Droppable>);

ItemList.defaultProps = {
	items: [
		{
			value: 'Несуществующая задача'
		}]
};

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};



export default ItemList;