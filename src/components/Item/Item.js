import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

class Item extends React.Component {

	render () {

		const { value, isDone, id, onClickDone, onClickDelete } = this.props;

		return (<span className= {
		classnames({
			[styles.item]: true,
			[styles.done]: isDone
	})}>
		<Checkbox checked= {isDone} onClick= {() => onClickDone(id)} />
		{value}
		<div className={styles.delete}>
			<IconButton onClick= {() => onClickDelete(id)}>
          		<DeleteIcon fontSize="small" />
        	</IconButton>
        </div>
    </span>);
	}
}


Item.defaultProps = {
    isDone: false
};

Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default Item;