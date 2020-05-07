import React from 'react';

export class SelectSearchType extends React.Component {

    handleClick = e => {
        this.props.chooseActiveSearchType(e.target.value)
    }

    contactAPI = () => {
        this.props.getData()
    }

    render(){
        return(
            <div>     
            <label>Top News Search</label>
            <input type="radio" name="radio" onClick={this.handleClick} value="top results" />
            <label>Keyword Search</label>
            <input type="radio" name="radio" onClick={this.handleClick} value="everything" />
            <button onClick={this.contactAPI}> Submit Search</button>                          
        </div>
        )
    }
}