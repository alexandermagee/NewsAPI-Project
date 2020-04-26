import React from 'react';
import './DisplayResults.css';

export class DisplayResults extends React.Component {

    componentDidMount() {
        console.log(this.props.loadedStatus)
    }

    componentDidUpdate() {
        console.log(this.props.loadedStatus);
        console.log(this.props.topResults);
    }

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
        if(this.props.loadedStatus === "not loaded"){
            return(
                <section class="testCardContainer">
                <article class="testCard">
                    <h3>Lorum Ipsum</h3>
                    <p class="testCardAuthor">By Anon</p>
                    <p><a href="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</a> </p>
                </article>
                </section>
                
            )
        }else{
            return (
                <section class="testCardContainer">{
            (this.props.topResults).map(item => {
                return(
                <article class="testCard">
                <h3>{item[0]}</h3>
                {item[1] === null ?
                <p class="testCardAuthor">By Anon</p> :
                <p class="testCardAuthor">By {item[1]}</p>
                }
                {/*<p>By {item[1]}</p>*/}
                <p><a href={item[4]}>{item[2]}</a></p>
                <p>{item[5]}</p>
                </article>
                )
            })

            }</section>
            )
        }
    }
}