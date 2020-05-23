import React, {useState} from 'react';
import styles from './EditedItem.module.css';

const EditedItem = ({value, id, changeItem}) => {

const initialState = {
	inputValue: value,
}

const [inputValue, setInputValue] = useState(initialState.inputValue);
const onClickEdit = (event) => {
	if (event.keyCode === 13 && inputValue!== '')  {changeItem(inputValue, id)} 
};


return(

	<input 
		type='text'
		autoFocus
		value={inputValue} 
		className={styles.input}
		onChange={event => {setInputValue(event.target.value)}}
		onKeyUp={onClickEdit}
	/>)
}

export default EditedItem;
