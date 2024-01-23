import React from 'react'
import SectionHeader from '../components/SectionHeader/SectionHeader'
import Blog from '../components/Blog/Blog';
import Posts from '../Data/Posts.json';

const Insightspage = () => {
  console.log(Posts)
  return (
    <div className="MySize pagePaddingTop">
      <div data-aos="fade-up">
        <SectionHeader
          HeaderName={[<span> OA</span>, "PS Insights"]}
          SectionName='Insights'
        />
        {
          Posts && Posts.map((ele)=>{
            return (
              <Blog
              author={ele.author}
              date={ele.date}
              title={ele.title}
              shortDescription={ele.shortDescription}
              id={ele.id}
            />
            )
          })
        }      
      </div>
    </div>
  )
}

export default Insightspage