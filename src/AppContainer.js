import React from 'react';
import {CountrySelector} from './CountrySelector';

const apikey = "apiKey=60b5ca9165374ce1987da329db6a4e4c";

let retrievedRestults;

export class AppContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            activeCountry: "",
            activeCountryCode: "gb"
        }
    }

    retrieveCountries = list => {
        this.setState({
            countries: list
        })
    }

    chooseActiveCountry = (selectedCountry,selectedCountryCode) => {
        this.setState({
            activeCountry: selectedCountry,
            activeCountryCode: selectedCountryCode
        })
    }

    getData = () => {
        const topNewsUrl= ('http://newsapi.org/v2/top-headlines?' +
        'country=gb&category=sports&' +
        apikey); 
        const searchTopNews = (`http://newsapi.org/v2/top-headlines?country=${this.state.activeCountryCode}&${apikey}`)
         /*const allNewsUrl= ('http://newsapi.org/v2/everything?' +
        'country=gb&' +
        apikey); */
        fetch(searchTopNews).then(response => {
            return response.json();
        }).then(result => {
            const retrievedResults = result.articles;
            console.log(retrievedResults);
            for(let i=0;i<retrievedResults.length;i++){
                console.log(retrievedResults)
            }
            }
        ) 
    }      

    
    render(){
        return <CountrySelector 
        getData={this.getData}
        countries={this.state.countries}
        retrieveCountries={this.retrieveCountries}
        chooseActiveCountry={this.chooseActiveCountry}
        activeCountry={this.state.activeCountry}
        activeCountryCode={this.state.activeCountryCode}
        />
    }
}