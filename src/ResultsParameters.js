import React from 'react';
import {sortParameters,pageSizeIntervals,languages} from './EndpointParameterInfo';

export const ResultsParameters = props => {

    const handleChange = e => {
        props.updateResultsParameters(e.target.id,e.target.value)
    }

        return (
            <div>
                <br></br>
                <section>
                    <label for="pageSize">Number of results to display:</label>
                    <select id="pageSize" onChange={handleChange} > 
                        {pageSizeIntervals.map((int,i) =>{
                            return(
                                <option value={int} id={i}>{int}</option>
                            );
                        })}
                    </select>
                </section>
                <br></br>
                <section className={`${props.everythingSearchDisplay}`}>
                    <label for="sortBy">Sort by:</label>
                    <select id="sortBy" onChange={handleChange} > 
                        {Object.keys(sortParameters).map((int,i) =>{
                            return(
                            <option value={int} id={i}>{sortParameters[int]}</option>
                            );
                        })}
                    </select>
                </section>
                <br></br>
                <section className={`${props.everythingSearchDisplay}`}>
                    <label for="language">Show results in:</label>
                    <select id="language" onChange={handleChange} >
                        {languages.map((language,i) => {
                            return (
                                (language === "en") ? 
                                <option value={language} id={i} selected="selected">{language}</option> :
                                <option value={language} id={i}>{language}</option>
                            )
                        })}
                    </select>
                
                </section>
            </div>
        )
    }

