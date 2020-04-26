import React from 'react';

export class SelectSearchType extends React.Component {

    handleClick = e => {
        this.props.chooseActiveSearchType(e.target.value)
    }

    render(){
        return(
            <div>     
            <label>Top News Search</label>
            <input type="radio" name="radio" onClick={this.handleClick} value="top results" />
            <label>Keyword Search</label>
            <input type="radio" name="radio" onClick={this.handleClick} value="everything" />                          
        </div>
        )
    }
}