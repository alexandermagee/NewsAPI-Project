import React from 'react';
import {countryCodes} from './EndpointParameterInfo';

const apikey = "apiKey=60b5ca9165374ce1987da329db6a4e4c";

export class CountrySelector extends React.Component {

    componentDidMount() {
        this.props.retrieveCountries(countryCodes.list)
    }

    handleChange = e => {
        const newCountry = e.target.value;
        const newCountryCode = countryCodes.countries[newCountry];
        this.props.chooseActiveCountry(newCountry,newCountryCode);
    }

    handleClick = () => {
        this.props.getData()
    }

    render () {
        return (
            <div>
            <button onClick={this.handleClick}> Search for news articles</button>
            <br></br>
            <label for="countries">Choose a country:</label>
            <select id="countries" onChange={this.handleChange} > 
                {this.props.countries}
            </select>
            </div>
        )
    }
}



