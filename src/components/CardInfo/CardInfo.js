import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CardInfo.css';

const CardInfo = ({src,title}) => {
    return (
            <div className="card-info">
               <img src={src} alt=""/>
                <Link className="card" to = "/register">
                    <Button className="card-btn">{title}</Button>
                </Link>  
            </div>
    );
};

export default CardInfo;