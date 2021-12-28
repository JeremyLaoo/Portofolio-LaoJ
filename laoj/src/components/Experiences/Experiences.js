import React, { useState } from 'react';
import './Experiences.css';
import Model from './Model';

import data from './data';
import { MenuExps } from './MenuExp';


const Experiences = () => {

        return (
            
            <div className="container div-experiences" id="experiences">
                <div className="titleExp">
                    <h1 >Experiences</h1>
                </div>
                <div className="row listcardExp">
                    {data.cardData.map((item, index) => {
                        return(
                            <div className="contentExp">
                                <div key={index} >
                                        <p className="posteExp">{item.title}</p>
                                        <p className="firmExp">{item.company}</p>
                                        <p className="dateExp">{item.date}</p>
                                        <p className="contractExp">{item.contrat}{console.warn(data.cardData)}</p>
                                        {/* <button type="button" class="btn btn-primary" onClick={() => getData(item.id, item.title, item.company, item.date, item.location, item.contrat, item.description, item.stack, item.url, item.cName)}>
                                            Launch demo modal
                                        </button> */}
                                        
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                
            

            </div>




        )
    }


export default Experiences