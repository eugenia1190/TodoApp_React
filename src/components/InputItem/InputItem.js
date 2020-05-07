import React from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';

import AddIcon from '../../img/add.png';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		labelValue: "Добавить задачу",
		noValue: false
	};

	onButtonClick = () => {
		this.setState ({
			inputValue: ''
		});

		if ( this.state.inputValue === ''){
			this.setState ({
			labelValue: "Вы не ввели значение!",
			noValue: true
			
		});
		} else {
			this.setState ({
			labelValue: "Добавить задачу",
			noValue: false
			
		});

		this.props.onClickAdd(this.state.inputValue);
		}
	}

	render () {

		return (
			<div className = {styles.wrap}>
				<input 
					className = {
						classnames({
							[styles.input]: true,
							[styles.error]: this.state.noValue
						})}
					placeholder={this.state.labelValue}
					value={this.state.inputValue}
					onChange={event => this.setState({ inputValue: event.target.value })}/>
				<div><img src = {AddIcon} alt = 'add' className={styles.addicon} onClick={ this.onButtonClick } /></div>
			</div>);
	}
}



export default InputItem;
