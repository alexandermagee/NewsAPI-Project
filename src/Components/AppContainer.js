import React from 'react';
import {CountrySelector} from './CountrySelector';
import {DisplayResults} from './DisplayResults';
import {CategorySelector} from './CategorySelector';
import {KeywordSearch} from './KeywordSearch';
import {SelectSearchType} from './SelectSearchType';
import {ResultsParameters} from './ResultsParameters';
import {Header} from './Header';
import {ResultsInformation} from './ResultsInformation';
import {SearchButton} from './SearchButton';

const apikey = "apiKey=60b5ca9165374ce1987da329db6a4e4c";

export class AppContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            //array of country options to select 
            countries: [],
            activeCountry: "United Kingdom",
            //code reflects parameter options expected by API 
            activeCountryCode: "gb",
            // will be the extracted information JSON object pulled from News API
            topResults : [],
            // parameters of category available for top news search
            activeCategory : "",
            // display loading placeholder on user interface
            loadedStatus: "not loaded",
            // URL encoded version of the user input on userSearch for everything results
            userSearchEncoded : "",
            userSearch: "",
            // parameters for organising search results
            sortBy: "publishedAt",
            pageSize: 20,
            language: "en",
            // differentiates between which components are visisble - only some are needed for each search type
            activeSearchType: "top results",
            everythingSearchDisplay: "hidden",
            topNewsSearchDisplay: "hidden",
        }
    }

    chooseActiveSearchType = selectedSearch => {
       /* each search display links to a css class name. when the value is hidden this is not visible to the user. 
       different components are required for two search types, and once selected there is only one active search type until
       the user changes to another */
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
        // pulls initial country list that can be searched for top news on this API 
        this.setState({
            countries: list
        })
    }

    chooseActiveCountry = (selectedCountry,selectedCountryCode) => {
        /* the activeCountry is selected by the user on the radio input list. this links to a country code 
        recognised by the API as an endpoint */
        this.setState({
            activeCountry: selectedCountry,
            activeCountryCode: selectedCountryCode
        })
    }

    chooseActiveCategory = selectedCategory => {
        /* sets the state of the category parameter which can be used to narrow top results */
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
        /* updates the current user search for the keyword search function */
        this.setState({
            userSearch: newSearch,
            userSearchEncoded: newSearchEncoded
        })
    }

    updateResultsParameters = (newParameterType,newParameterValue) => {
        /* recognises the type of results parameter received, and updates the according value on
        the state parameter keys */
        this.setState({
        [newParameterType]: newParameterValue
        })
    }

    getData = () => {
        // different endpoints for the two search types, with different parameters that can be included by the user using update components 
        const searchTopNews = (`http://newsapi.org/v2/top-headlines?country=${this.state.activeCountryCode}&category=${this.state.activeCategory}&pageSize=${this.state.pageSize}&${apikey}`)
        const searchAllNews = (`http://newsapi.org/v2/everything?qInTitle=${this.state.userSearchEncoded}&pageSize=${this.state.pageSize}&sortBy=${this.state.sortBy}&language=${this.state.language}&${apikey}`);
        
        // before making a call to the API the end point is decided by the user selection for search type
        let currentSearch = null;
        (this.state.activeSearchType === "top results") ? currentSearch=searchTopNews : currentSearch=searchAllNews;


        try{
        fetch(currentSearch)
        .then(response => {
            return response.json();
        }).then(result => {

            // stores the relevant articles section of response object into variable 
            let rawData = result.articles;
            // create empty array to pass relevant values from rawData into 
            let dataToDisplay = [];
            for(let i=0; i<rawData.length; i++){
                // create empty array to pass collected values from each index of object into
                let extractedInformation = [];
                // will only pass information in if the array contains data - no blank results
                if(rawData[i]["content"] !== null){
                extractedInformation.push(
                    // raw data is an array of objects. on each array recognises these keys and stores their values into new array 
                    rawData[i]["title"],
                    rawData[i]["author"],
                    rawData[i]["content"],
                    rawData[i]["source"]["name"],
                    rawData[i]["url"],
                    rawData[i]["urlToImage"]                
                    )
                // dataToDisplay will become an array of arrays, containing the relevant information in order
                dataToDisplay.push(extractedInformation);
                }
            }
            // update loaded status and push the extracted array to the data to be displayed to the user
            this.setState({
                loadedStatus : "loaded",
                topResults : dataToDisplay
            });
            }
        )
        //error handling
        } catch(e){
            console.log(e)
        } 
        
    }      

    
    render(){
        return (
        <div>
        <Header />

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

        <SearchButton 
            getData={this.getData}
        />

        <ResultsInformation 
        loadedStatus={this.state.loadedStatus}
        activeSearchType={this.state.activeSearchType}
        activeCategory={this.state.activeCategory}
        activeCountry={this.state.activeCountry}
        userSearch={this.state.userSearch}
        />

        <DisplayResults 
        topResults={this.state.topResults}
        loadedStatus={this.state.loadedStatus}
        userSearch={this.state.userSearch}
        />

        </div>
        );
    }
}