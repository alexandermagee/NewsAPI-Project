import React from 'react';

export class KeywordSearch extends React.Component {

    handleChange = e => {
        let userInput = e.target.value;
        let userInputEncoded = encodeURIComponent(e.target.value);
        this.props.updateUserSearch(userInput,userInputEncoded);
    }

    render(){
        return(
            <div>
            <label for="keywordSearch">Results containing the word/s</label>
            <input type="text" name="keywordSearch" onChange={this.handleChange} value={this.props.userSearch} />
            <button>Search</button>
            </div>
        )
    }
}