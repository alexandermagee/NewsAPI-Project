import React from 'react';

export class DisplayResults extends React.Component {


    render() {
       /* let rawData = this.props.topResults;
        for(let i=0; i<rawData.length; i++){
            let extractedInformation = [];
            extractedInformation.push(
                rawData[i]["author"],
                rawData[i]["content"],
                rawData[i]["source"]["name"],
                rawData[i]["title"],
                rawData[i]["url"],
                rawData[i]["urlToImage"]                  
                )
            this.displayedInformation.push(extractedInformation);
        } */
        {if(this.props.nothingLoaded){
            return(
                <p>Please select a country</p>
            )
        }else{
            return (
            (this.props.topResults).map(item => {
                return(
                <article>
                <h3>{item[0]}</h3>
                <p>By {item[1]}</p>
                <p><a href={item[4]}>{item[2]}</a></p>
                <p>{item[5]}</p>
                </article>
                )
            })
            )
        }}
    }
}