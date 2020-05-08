import React from 'react';
import {categories} from './EndpointParameterInfo';
import './CategorySelector.css';

export const CategorySelector = props => {

    const handleClick = e => {
        props.chooseActiveCategory(e.target.value);
    }

  
        return(
            <form 
            className={`${props.topNewsSearchDisplay} categoryContainer`}
            >
                <div>
                    <label>All</label>
                    <input 
                    type="radio" name="radio" onClick={handleClick} value="All" />
                </div>
                {categories.map(category => {
                    return(
                        <div>
                            <label>{category}</label>
                            <input type="radio" name="radio" onClick={handleClick} value={category} />
                        </div>
                    );
                })}
            </form>
        )
    }
