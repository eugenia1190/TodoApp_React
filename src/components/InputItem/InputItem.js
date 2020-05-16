import React, {useState} from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';

import AddIcon from '../../img/add.png';
import Tooltip from '../Tooltip/Tooltip.js';

const InputItem = ({onClickAdd}) => {
	const initialState = {
		inputValue: '',
		labelValue: 'Добавить задачу',
		noValue: false,
		error: false,
	};

	const [inputValue, setInputValue] = useState(initialState.inputValue);
	const [labelValue, setLabelValue] = useState(initialState.labelValue);
	const [noValue, setNoValue] = useState(initialState.setNoValue);
	const [error, setError] = useState(initialState.setError);


	const onButtonClick = () => {
		setInputValue('');
		setError(false);

		if ( inputValue === ''){
			setLabelValue('Вы не ввели значение!');
			setNoValue(true);
		} else {
			setLabelValue('Добавить задачу');
			setNoValue(false);
			onClickAdd(inputValue) === 'error' && setError(true);
		}
	}

	const onClickEnter = (event) => { if (event.keyCode === 13) {onButtonClick()} };

	return (
		<div className = {styles.wrap}>
			{error === true && <Tooltip />}
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
			<div><img src = {AddIcon} alt = 'add' className={styles.addicon} onClick={ onButtonClick } /></div>
		</div>
	)
	
}

export default InputItem;
