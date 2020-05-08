import React from 'react';

export const KeywordSearch = props => {

    const handleChange = e => {
        let userInput = e.target.value;
        let userInputEncoded = encodeURIComponent(e.target.value);
        props.updateUserSearch(userInput,userInputEncoded);
    }

        return(
            <div className={`${props.everythingSearchDisplay}`}>
                <label for="keywordSearch">Narrow by word or phrase</label>
                <input type="text" name="keywordSearch" onChange={handleChange} value={props.userSearch} />
            </div>
        )
    }
