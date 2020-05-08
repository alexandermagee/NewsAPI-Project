import React from 'react';

export const ResultsInformation = props => {
    return (
        /* logic based on type of search that depends on data being fully loaded.
        Will display information about the current search to the user */
        (props.loadedStatus === "loaded" && props.activeSearchType === "top results") ?
            <h4>{props.activeCategory} Results in {props.activeCountry}</h4> :
         (props.loadedStatus === "loaded" && props.activeSearchType === "everything" ? 
         <h4>Top Results Containing {props.userSearch}</h4> : null)
    )
}