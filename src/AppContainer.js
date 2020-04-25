import React from 'react';
import {CountrySelector} from './CountrySelector';
import {DisplayResults} from './DisplayResults';

const apikey = "apiKey=60b5ca9165374ce1987da329db6a4e4c";

let retrievedRestults;

export class AppContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            activeCountry: "",
            activeCountryCode: "gb",
            nothingLoaded: true,
            topResults : []
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
        /*const topNewsUrl= ('http://newsapi.org/v2/top-headlines?' +
        'country=gb&category=sports&' +
        apikey); */
        const searchTopNews = (`http://newsapi.org/v2/top-headlines?country=${this.state.activeCountryCode}&${apikey}`)
         /*const allNewsUrl= ('http://newsapi.org/v2/everything?' +
        'country=gb&' +
        apikey); */
        fetch(searchTopNews).then(response => {
            return response.json();
        }).then(result => {
            let rawData = result.articles;
            console.log(rawData);
            let dataToDisplay = [];
            for(let i=0; i<rawData.length; i++){
                let extractedInformation = [];
                if(rawData[i]["content"] !== null){
                extractedInformation.push(
                    rawData[i]["title"],
                    rawData[i]["author"],
                    rawData[i]["content"],
                    rawData[i]["source"]["name"],
                    rawData[i]["url"],
                    rawData[i]["urlToImage"]                
                    )
                dataToDisplay.push(extractedInformation);
                }
            }

            this.setState({
                nothingLoaded : false,
                topResults : dataToDisplay
            });
            console.log(this.state.topResults);
            }
        ) 
        
    }      

    
    render(){
        return (
        <div>
            
        <CountrySelector 
        getData={this.getData}
        countries={this.state.countries}
        retrieveCountries={this.retrieveCountries}
        chooseActiveCountry={this.chooseActiveCountry}
        activeCountry={this.state.activeCountry}
        activeCountryCode={this.state.activeCountryCode}
        />

        <DisplayResults 
        topResults={this.state.topResults}
        nothingloaded={this.state.nothingLoaded}
        /> 
        </div>
        );
    }
}