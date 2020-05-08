import React from 'react';
import {sortParameters,pageSizeIntervals,languages} from './EndpointParameterInfo';

export const ResultsParameters = props => {

    const handleChange = e => {
        //sends the updated parameter type as well as selected value
        props.updateResultsParameters(e.target.id,e.target.value)
    }

        return (
            <div>
                <br></br>
                {/* map function loops over the possible options  for the number of results returned */}
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
                {/* keys and map loop over object detailing search sort parameters. */}        
                <section className={`${props.everythingSearchDisplay}`}>
                    <label for="sortBy">Sort by:</label>
                    <select id="sortBy" onChange={handleChange} > 
                        {Object.keys(sortParameters).map((int,i) =>{
                            return(
                            /* we use the current key to match this parameter back to more plain english term that it holds
                            as a value on the sortParameters object to display back to user */
                            <option value={int} id={i}>{sortParameters[int]}</option>
                            );
                        })}
                    </select>
                </section>

                <br></br>
                {/* use map to loop over the available search languages and display in the drop down select */}
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

