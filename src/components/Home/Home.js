import React, { useContext, useState } from 'react';
import logo from '../../logos/Group.png';
import { Link } from 'react-router-dom';
import './Home.css';
import child from '../../images/childSupport.png';
import shelter from '../../images/refuseShelter.png';
import charity from '../../images/foodCharity.png';
import cloth from '../../images/clothSwap.png';
import river from '../../images/riverClean.png';
import water from '../../images/cleanWater.png';
import education from '../../images/goodEducation.png';
import books from '../../images/newBooks.png';
import study from '../../images/studyGroup.png';
import bird from '../../images/birdHouse.png';
import library from '../../images/libraryBooks.png';
import drive from '../../images/driveSafety.png';
import music from '../../images/musicLessons.png';
import vote from '../../images/voteRegister.png';
import park from '../../images/cleanPark.png';
import IT from '../../images/ITHelp.png';
import { UserContext } from '../../App';
import CardInfo from '../CardInfo/CardInfo';


const Home = () => {
    return (
        <div>
             <header>
                <div>
                    <img className="logo" src={logo} alt=""/>
                </div>
                <nav> 
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/donation">Donation</Link>
                    <Link className="navLink" to="/events">Events</Link>
                    <Link className="navLink" to="/blog">Blog</Link>
                    <Link className="register" to="/register">Register</Link>
                    <Link className="admin" to="/admin">Admin</Link>
                </nav>
            </header>
            <div className="second__section">
                <h1>I GROW BY HELPING PEOPLE NEED.</h1>
                <input placeholder="Search" type="text"/>
            </div>
            <section className="third__section">
                <Link className="card" to = "/register">
                    <CardInfo
                        src={child}
                        title="Child Support" 

                    />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={shelter}
                        title="Refuge Shelter"
                    />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={charity}
                        title="Food Charity"
                    />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={cloth}
                        title="Host a Clothing swap"
                    />
                </Link>
               
            </section>
            <section className="third__section">
                <Link className="card" to = "/register">
                    <CardInfo
                        src={river}
                        title="Host a river Clean up"
                    />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={water}
                        title="Clean water from children" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={education}
                        title="Good Education" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={books}
                        title="New Books for Children" 
                     />
                </Link>
            </section>
         
            <section className="third__section">
                <Link className="card" to = "/register">
                    <CardInfo
                        src={study}
                        title="Host a study group" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={bird}
                        title="Build bird house for your neighbors" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={library}
                        title="Organize books at the library" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={drive}
                        title="Give a seminar on driving safety" 
                     />
                </Link>
                </section>
                <section className="third__section">
                <Link className="card" to = "/register">
                    <CardInfo
                        src={music}
                        title="Give free music lesions" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={vote}
                        title="Teach people how to register to vote" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={park}
                        title="Clean up your local park" 
                     />
                </Link>
                <Link className="card" to = "/register">
                    <CardInfo
                        src={IT}
                        title="Give IT helps to local adults" 
                     />
                </Link>
            </section>
        </div>
    );
};

export default Home;