import React, { useState } from 'react';
import './Experiences.css';
import ExpModel from './ExpModel';

import data from './ExpData';
import { MenuExps } from './MenuExp';

import { Button, Modal } from 'react-bootstrap';



function Experiences() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                        <Button variant="primary" onClick={handleShow}>
                                            Details
                                        </Button>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            

            </div>




        )
    }


export default Experiences