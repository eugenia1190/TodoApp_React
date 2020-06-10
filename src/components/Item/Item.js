import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';
import styles from './Item.module.css';

import Checkbox from '@material-ui/core/Checkbox';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import IconButton from '@material-ui/core/IconButton';

import EditedItem from '../EditedItem/EditedItem.js';

const Item = ({ value, isDone, id, onClickDone, onClickDelete, onItemDoubleClick, isEdited, changeItem, checkItems }) => {
	return (
		<div 
            className={
	       	  	classnames({
	       	  		[styles.item]: true,
	       	  		[styles.done]: isDone,
                    [styles.editedItem]: isEdited,})}
        >
			{!isEdited && <Checkbox
                icon={<RadioButtonUncheckedSharpIcon fontSize='small' />}
                checkedIcon={<CheckCircleIcon fontSize='small' />}
                color='primary'
                checked={isDone}
                onClick={() => onClickDone(id)}
            />}
          	<div className={styles.value} onDoubleClick={(event) => onItemDoubleClick(value, id, event)}>
          	    { !isEdited && value }
                {isEdited && <EditedItem  value={value} changeItem={changeItem} checkItems={checkItems} id={id} />}
          	</div>		
			{!isEdited && <div className={styles.delete}>
                <IconButton  onClick={() => onClickDelete(id)}>
                    <CancelSharpIcon fontSize='small' />
                </IconButton>
            </div>}
   		</div>
   	)
}


Item.defaultProps = {
    isDone: false
};

Item.propTypes = {
	value: PropTypes.string.isRequired,
	isDone: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	onClickDone: PropTypes.func,
	onClickDelete: PropTypes.func
};

export default Item;