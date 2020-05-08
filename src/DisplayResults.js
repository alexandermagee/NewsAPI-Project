import React from 'react';
import './DisplayResults.css';

export const DisplayResults = props => {

    return(
        /* display initial message before data is loaded */
        (props.loadedStatus) === "not loaded" ? 
                <h3>Please select your search criteria above</h3> : 
                /* uses the rawData nested array returned from the API call which is looped over 
                using Map and returned as a JSX block of information about each article */                
                <section className="testCardContainer"> 
                {
                    (props.topResults).map(item => {
                    return(
                        <article className="testCard">
                            <h3>{item[0]}</h3>

                            {
                                /* conditional prevents blank / null author titles returned from API object 
                                appearing so when displayed to user */
                            (item[1] === null || item[1] === "") ?
                            <p className="testCardAuthor">By Anon</p> :
                            <p className="testCardAuthor">By {item[1]}</p>
                            }

                            <p> {/*adds hyperlink to the article which opens in new tab */ }
                                <a href={item[4]} target="_blank">{item[2]}</a>
                            </p>

                            <p>{item[3]}</p>
                        </article>
                        );
                    })     
                }
                </section>
            );
        }
