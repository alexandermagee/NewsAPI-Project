import React from 'react';
import {sortParameters,pageSizeIntervals,languages} from './EndpointParameterInfo';

export class ResultsParameters extends React.Component {

    handleChange = e => {
        this.props.updateResultsParameters(e.target.id,e.target.value)
    }

    render() {
        return (
            <div>
                <br></br>
                <section>
                    <label for="pageSize">Number of results to display:</label>
                    <select id="pageSize" onChange={this.handleChange} > 
                        {pageSizeIntervals.map((int,i) =>{
                            return(
                                <option value={int} id={i}>{int}</option>
                            );
                        })}
                    </select>
                </section>
                <br></br>
                <section className={`${this.props.everythingSearchDisplay}`}>
                    <label for="sortBy">Sort by:</label>
                    <select id="sortBy" onChange={this.handleChange} > 
                        {Object.keys(sortParameters).map((int,i) =>{
                            return(
                            <option value={int} id={i}>{sortParameters[int]}</option>
                            );
                        })}
                    </select>
                </section>
                <br></br>
                <section className={`${this.props.everythingSearchDisplay}`}>
                    <label for="language">Show results in:</label>
                    <select id="language" onChange={this.handleChange} >
                        {languages.map((language,i) => {
                            return (
                                <option value={language} id={i}>{language}</option>
                            )
                        })}
                    </select>
                
                </section>
            </div>
        )
    }
}
