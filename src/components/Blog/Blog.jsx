import React from 'react';
import './blog.css';
import Logo from '../../Images/oapsLogo.png';
import { Link } from 'react-router-dom';

const Blog = ({ title, shortDescription, author, date, id }) => {
    return (
        <div className="blog-container">
            <Link to={`/blog/${id}`}>
                <div className='top'>
                    <div>
                        <img src={Logo} alt="oaps" />
                    </div>
                    <div className='right'>
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                </div>
                <h2 className="blog-title">{title}</h2>
                <p className="blog-description">{shortDescription}</p>
                <p>See More . . .</p>
            </Link>
        </div>
    );
};

export default Blog;