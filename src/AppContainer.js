import React from 'react';
import {CountrySelector} from './CountrySelector';
import {DisplayResults} from './DisplayResults';
import {CategorySelector} from './CategorySelector';
import {KeywordSearch} from './KeywordSearch';
import {SelectSearchType} from './SelectSearchType';
import {ResultsParameters} from './ResultsParameters';

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
            sortBy: "publishedAt",
            pageSize: 50,
            language: "en",
            activeSearchType: "top results",
            everythingSearchDisplay: "hidden",
            topNewsSearchDisplay: "hidden",
        }
    }

    chooseActiveSearchType = selectedSearch => {
       
        (selectedSearch === "everything") ? 
        this.setState({
            activeSearchType: selectedSearch,
            everythingSearchDisplay: "notHidden",
            topNewsSearchDisplay: "hidden"
        }) :
        this.setState({
            activeSearchType: selectedSearch,
            everythingSearchDisplay: "hidden",
            topNewsSearchDisplay: "notHidden"
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
    }

    updateResultsParameters = (newParameterType,newParameterValue) => {
        this.setState({
        [newParameterType]: newParameterValue
        })
        console.log(newParameterValue)
    }

    getData = () => {
        const searchTopNews = (`http://newsapi.org/v2/top-headlines?country=${this.state.activeCountryCode}&category=${this.state.activeCategory}&pageSize=${this.state.pageSize}&${apikey}`)
        const searchAllNews = (`http://newsapi.org/v2/everything?qInTitle=${this.state.userSearchEncoded}&pageSize=${this.state.pageSize}&sortBy=${this.state.sortBy}&language=${this.state.language}&${apikey}`);
        let currentSearch = null;
        (this.state.activeSearchType === "top results") ? currentSearch=searchTopNews : currentSearch=searchAllNews;
        if(currentSearch){
        fetch(currentSearch)
        .then(response => {
            return response.json();
        }).then(result => {
            let rawData = result.articles;
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
        getData={this.getData}
        />

        <CountrySelector 
        getData={this.getData}
        countries={this.state.countries}
        retrieveCountries={this.retrieveCountries}
        chooseActiveCountry={this.chooseActiveCountry}
        activeCountry={this.state.activeCountry}
        activeCountryCode={this.state.activeCountryCode}
        topNewsSearchDisplay={this.state.topNewsSearchDisplay}
        />

        <CategorySelector 
        activeCategory={this.state.activeCategory}
        chooseActiveCategory={this.chooseActiveCategory}
        topNewsSearchDisplay={this.state.topNewsSearchDisplay}
        />

        <KeywordSearch 
        userSearch={this.state.userSearch}
        updateUserSearch={this.updateUserSearch}
        everythingSearchDisplay={this.state.everythingSearchDisplay}
        />

        <ResultsParameters 
            updateResultsParameters={this.updateResultsParameters}
            everythingSearchDisplay={this.state.everythingSearchDisplay}
        />

        {(this.state.loadedStatus === "loaded" && this.state.activeSearchType === "top results") ?
            (<h4>{this.state.activeCategory} Results in {this.state.activeCountry}</h4>) :
         (this.state.loadedStatus === "loaded" && this.state.activeSearchType === "everything" ? <h4>Top Results Containing {this.state.userSearch}</h4> : null)}

        <DisplayResults 
        topResults={this.state.topResults}
        loadedStatus={this.state.loadedStatus}
        userSearch={this.state.userSearch}
        /> 

        </div>
        );
    }
}