import React from 'react';
import './ThirdSection.css';
import { Data1 } from '../Data/Data';

function ThirdSection() {
  return (
    <div className='third-section'>
       <div className="container">
            <div className="section-container">
                <div className="first-part">
                    <h3 className='third-title'>Latest Articles</h3>
                </div>
                <div className="last-part">
                    {
                        Data1.map(item => (
                            <div className="article-box" key={item.id}>
                               <img src={item.img} alt="" />
                               <div className="info-box">
                                   <h4>{item.upText}</h4>
                                   <h3>{item.title}</h3>
                                   <p>{item.pText}</p>   
                               </div>    
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection;

