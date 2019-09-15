import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


const Item = ({ value, isDone, onClickDone }) => (<span className={
	classnames({
		[styles.item]: true,
		[styles.done]: isDone
	})}> <Checkbox 
		checked= {isDone}
		onClick= {() => onClickDone(isDone)}
		/> {value} <div className={styles.delete}><IconButton>
          <DeleteIcon fontSize="small" />
        </IconButton></div></span>);


export default Item;