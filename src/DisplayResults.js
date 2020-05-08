import React from 'react';
import './DisplayResults.css';

export const DisplayResults = props => {

    return(
        (props.loadedStatus) === "not loaded" ? 
                <h3>Please select your search criteria above</h3> :                
                <section className="testCardContainer"> 
                {
                    (props.topResults).map(item => {
                    return(
                        <article className="testCard">
                            <h3>{item[0]}</h3>

                            {
                            (item[1] === null || item[1] === "") ?
                            <p className="testCardAuthor">By Anon</p> :
                            <p className="testCardAuthor">By {item[1]}</p>
                            }

                            <p>
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
