import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';

import Tooltip from '../Tooltip/Tooltip.js';

const InputItem = ({onClickAdd, checkItems}) => {
	const initialState = {
		inputValue: '',
		labelValue: 'Добавить задачу',
		noValue: false,
		error: false,
	};

	const [inputValue, setInputValue] = useState(initialState.inputValue);
	const [labelValue] = useState(initialState.labelValue);
	const [noValue, setNoValue] = useState(initialState.setNoValue);
	const [error, setError] = useState(initialState.setError);


	const onButtonClick = () => {
		if (checkItems(inputValue) === 'error') {
			setError(true)
		} else if ( inputValue === '') {
			setNoValue(true);
			setError(true);
		} else {
			setInputValue('');
			setError(false);
			onClickAdd(inputValue);
		}
	}

	const onClickEnter = (event) => { if (event.keyCode === 13) {onButtonClick()} };

	return (
		<div className={styles.wrap}>
			{error === true && <Tooltip noValue={noValue} />}
			<input 
				className = {
					classnames({
						[styles.input]: true,
						[styles.error]: noValue || error,
					})}
				placeholder={labelValue}
				value={inputValue}
				onChange={event => { setInputValue(event.target.value); setNoValue(false); setError(false)}}
				onKeyUp={onClickEnter}/>
			<IconButton size='small'  onClick={onButtonClick}><AddCircleIcon color='primary' fontSize='large' /></IconButton>
		</div>
	)
}

export default InputItem;
