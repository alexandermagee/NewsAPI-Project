import React from 'react';
import {categories} from './EndpointParameterInfo';
import './CategorySelector.css';

export class CategorySelector extends React.Component {

    handleClick = e => {
        this.props.chooseActiveCategory(e.target.value);
    }

    render(){
        return(
            <form className={`${this.props.topNewsSearchDisplay} categoryContainer`}>
                        <div>
                        <label>All</label>
                        <input type="radio" name="radio" onClick={this.handleClick} value="All" />
                        </div>
                {categories.map(category => {
                    return(
                        <div>
                        <label>{category}</label>
                        <input type="radio" name="radio" onClick={this.handleClick} value={category} />
                        </div>
                    )
                })}
            </form>
        )
    }
}