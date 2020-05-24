import React, {useState} from 'react';
import styles from './EditedItem.module.css';
import IconButton from '@material-ui/core/IconButton';
import LoopIcon from '@material-ui/icons/Loop';

const EditedItem = ({value, id, changeItem}) => {

const initialState = {
	inputValue: value,
}

const [inputValue, setInputValue] = useState(initialState.inputValue);
const onClickEdit = (event) => {
	if (event.keyCode === 13 && inputValue!== '')  {changeItem(inputValue, id)} 
};


return(

	<div className={styles.wrap}><input 
		type='text'
		autoFocus
		value={inputValue} 
		className={styles.input}
		onChange={event => {setInputValue(event.target.value)}}
		onKeyUp={onClickEdit}
	/>
	<IconButton onClick={event => changeItem(inputValue, id)}><LoopIcon  fontSize="small" color="primary" /></IconButton>
	</div>


	)
}

export default EditedItem;
