import React, {useState} from 'react';
import styles from './EditedItem.module.css';

import IconButton from '@material-ui/core/IconButton';
import LoopIcon from '@material-ui/icons/Loop';

const EditedItem = ({value, id, changeItem, checkItems}) => {

const initialState = {
	inputValue: value,
	previousValue: value,
}

const [inputValue, setInputValue] = useState(initialState.inputValue);
const [previousValue] = useState(initialState.previousValue);

const onClickEdit = event => {
	checkItems(inputValue) === 'error' ? changeItem(previousValue, id) : inputValue === '' ?  changeItem(previousValue, id) : changeItem(inputValue, id) 
};

	return(
	
		<div className={styles.wrap}><input 
			type='text'
			autoFocus
			value={inputValue} 
			className={styles.input}
			onChange={event => {setInputValue(event.target.value)}}
			onKeyUp={event => event.keyCode === 13 && onClickEdit(event)}
			onBlur={onClickEdit}
		/>
		<IconButton onClick={onClickEdit}><LoopIcon  fontSize='small' color='primary' /></IconButton>
		</div>
	
	)
}

export default EditedItem;
