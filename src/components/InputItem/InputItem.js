import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
			<div>
				<TextField
			    	error={this.state.noValue}
			    	id="standard-dense"
			    	label={this.state.labelValue}
			    	margin="dense"
			    	fullWidth
			    	value={this.state.inputValue}
			    	onChange={event => this.setState({ inputValue: event.target.value.toUpperCase() })}
			    />
			    <Button
			    	variant='contained'
			    	color='primary'
			    	fullWidth
			    	onClick={ this.onButtonClick }
			    >
			    	Добавить
			    </Button>	
			</div>);
	}
}



export default InputItem;
