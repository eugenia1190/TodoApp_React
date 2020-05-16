import React from 'react';
import classnames from 'classnames';
import styles from './InputItem.module.css';

import AddIcon from '../../img/add.png';
import Tooltip from '../Tooltip/Tooltip.js';

class InputItem extends React.Component {
	state = {
		inputValue: '',
		labelValue: "Добавить задачу",
		noValue: false,
		error: false,
	};

	onButtonClick = () => {
		this.setState ({
			inputValue: '',
			error: false,
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

			this.props.onClickAdd(this.state.inputValue) === 'error' &&	this.setState({error: true});
		}
	}

	onClickEnter = (event) => { if (event.keyCode === 13) {this.onButtonClick()} };

	render () {

		return (
			<div className = {styles.wrap}>
				{this.state.error === true && <Tooltip />}
				<input 
					className = {
						classnames({
							[styles.input]: true,
							[styles.error]: this.state.noValue || this.state.error,
						})}
					placeholder={this.state.labelValue}
					value={this.state.inputValue}
					onChange={event => this.setState({ inputValue: event.target.value, noValue: false, error: false })}
					onKeyUp={this.onClickEnter}/>
				<div><img src = {AddIcon} alt = 'add' className={styles.addicon} onClick={ this.onButtonClick } /></div>
			</div>
		);
	}
}

export default InputItem;
