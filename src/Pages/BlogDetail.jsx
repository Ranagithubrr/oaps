import React from 'react'
import { useParams } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import Posts from '../Data/Posts.json';
import './blogDetail.css'

const BlogDetail = () => {
    const { id } = useParams();
    const selectedPost = Posts.find(post => post.id === parseInt(id));
    if (!selectedPost) {
        return (
            <div className="MySize pagePaddingTop">
                <p>Post not found</p>
            </div>
        );
    }
    return (
        <div className="MySize pagePaddingTop">{id}
            <SectionHeader
                HeaderName={["Blog Details Of ", <span> OA</span>, "PS"]}
                SectionName={id}
            />
            <div className="post-container">
                <h1 className="post-title">{selectedPost.title}</h1>
                <p className="post-metadata">{selectedPost.author} | {selectedPost.date}</p>
                <p className="post-description">{selectedPost.longDescription}</p>
            </div>

        </div>
    )
}

export default BlogDetail