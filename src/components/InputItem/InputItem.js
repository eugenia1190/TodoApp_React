import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
	state = {
		inputValue: '',
	};

	onButtonClick = () => {
		this.setState ({
			inputValue: ''
		});

		this.props.onClickAdd(this.state.inputValue);
	}

	render () {
		const { onClickAdd } = this.props;

		return (
			<div>
				<TextField
			    	id="standard-dense"
			    	label="Добавить задачу"
			    	margin="dense"
			    	fullWidth
			    	value={this.state.inputValue}
			    	onChange={event => this.setState({ inputValue: event.target.value })}
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
