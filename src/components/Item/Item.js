import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './Item.module.css';

import Checkbox from '@material-ui/core/Checkbox';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';

const Item = ({ value, isDone, id, onClickDone, onClickDelete }) => {
	return (
		<span className={
			classnames({
				[styles.item]: true,
				[styles.done]: isDone,
		})}>
			
			<Checkbox
            	icon={<RadioButtonUncheckedSharpIcon fontSize="small" />}
            	checkedIcon={<CheckCircleIcon fontSize="small" />}
               	color="primary"
             	checked={isDone}
              	onClick={() => onClickDone(id)}
          	/>
			{value}
			<div className={styles.delete}>
   			    <IconButton  onClick={() => onClickDelete(id)}>
   			    	<CancelSharpIcon fontSize="small" />
   			    </IconButton>
   			</div>
   		</span>
   	)
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