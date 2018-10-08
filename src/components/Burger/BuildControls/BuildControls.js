import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './buildControl/buildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    {controls.map(ctrl => (
        <BuildControl 
            add = {() => props.ingredientAdded(ctrl.type)}
            del = {() => props.ingredientRemove(ctrl.type)}
            key={ctrl.label} 
            label={ctrl.label} />
    ))}

    </div>
);

export default buildControls;