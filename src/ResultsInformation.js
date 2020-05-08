import React from 'react';

export const ResultsInformation = props => {
    return (
        (props.loadedStatus === "loaded" && props.activeSearchType === "top results") ?
            <h4>{props.activeCategory} Results in {props.activeCountry}</h4> :
         (props.loadedStatus === "loaded" && props.activeSearchType === "everything" ? <h4>Top Results Containing {props.userSearch}</h4> : null)
    )
}