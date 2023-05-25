import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
const Nav = () => {
    return (
        <>
            <section class="header">
                <nav>
                    <h2 style={ { color: "white" } }>LOGO</h2>
                    <div class="nav-links " id="navlinks">
                        <i class="fa fa-times" onclick="hidemenu()"></i>


                        <ul>
                            <li className="nav-item">
                                <Link to={ "/home" }>
                                    <a className="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li><a href=" ">ABOUT</a></li>

                            <li className="nav-item">
                                <Link to={ "/add-blog" }>
                                    <a className="nav-link">Add Blog</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={ "/learn-mor" }>
                                    <a className="nav-link">LearnMor</a>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={ "/table" }>
                                    <a className="nav-link">table</a>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <i class="fa fa-bars" onclick="showemenu()"></i>

                </nav>

            </section>
        </>
    )
}

export default Nav