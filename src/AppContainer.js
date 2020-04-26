import React from 'react';
import {CountrySelector} from './CountrySelector';
import {DisplayResults} from './DisplayResults';
import {CategorySelector} from './CategorySelector';
import {KeywordSearch} from './KeywordSearch';
import {SelectSearchType} from './SelectSearchType';

const apikey = "apiKey=60b5ca9165374ce1987da329db6a4e4c";

export class AppContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            countries: [],
            activeCountry: "United Kingdom",
            activeCountryCode: "gb",
            topResults : [],
            activeCategory : "",
            loadedStatus: "not loaded",
            userSearchEncoded : "",
            userSearch: "",
            activeSearchType: "top results"
        }
    }

    chooseActiveSearchType = selectedSearch => {
        this.setState({
            activeSearchType: selectedSearch
        })
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

    chooseActiveCategory = selectedCategory => {
        selectedCategory === "All" ? 
        this.setState({
            activeCategory : ""
        })
        :
        this.setState({
            activeCategory : selectedCategory
        })
    }

    updateUserSearch = (newSearch,newSearchEncoded) => {
        this.setState({
            userSearch: newSearch,
            userSearchEncoded: newSearchEncoded
        })
        console.log(newSearch,newSearchEncoded)
    }

    getData = () => {
        const searchTopNews = (`http://newsapi.org/v2/top-headlines?country=${this.state.activeCountryCode}&category=${this.state.activeCategory}&${apikey}`)
        const searchAllNews = (`http://newsapi.org/v2/everything?qInTitle=${this.state.userSearchEncoded}&${apikey}`);
        let currentSearch = null;
        (this.state.activeSearchType === "top results") ? currentSearch=searchTopNews : currentSearch=searchAllNews;
        if(currentSearch){
        fetch(currentSearch)
        .then(response => {
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
                loadedStatus : "loaded",
                topResults : dataToDisplay
            });
            console.log(currentSearch+this.state.topResults);
            }
        )
        } 
        
    }      

    
    render(){
        return (
        <div>
        <h1>Search for News Articles Across the World</h1>

        <SelectSearchType 
        chooseActiveSearchType={this.chooseActiveSearchType}
        />

        <CountrySelector 
        getData={this.getData}
        countries={this.state.countries}
        retrieveCountries={this.retrieveCountries}
        chooseActiveCountry={this.chooseActiveCountry}
        activeCountry={this.state.activeCountry}
        activeCountryCode={this.state.activeCountryCode}
        />

        <CategorySelector 
        activeCategory={this.state.activeCategory}
        chooseActiveCategory={this.chooseActiveCategory}
        />

        <KeywordSearch 
        userSearch={this.state.userSearch}
        updateUserSearch={this.updateUserSearch}
        />

        {(this.state.loadedStatus === "loaded") ?
            (<h4>{this.state.activeCategory} Results in {this.state.activeCountry}</h4>) :
         (<span></span>) }

        <DisplayResults 
        topResults={this.state.topResults}
        loadedStatus={this.state.loadedStatus}
        userSearch={this.state.userSearch}
        /> 

        </div>
        );
    }
}