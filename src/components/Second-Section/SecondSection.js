import React from 'react';
import './SecondSection.css';
import { Data } from '../Data/Data';

function SecondSection() {
  return (
    <div className='second-section'>
        <div className="container">
            <div className="section-container">
                <div className="first-part">
                    <h3 className='second-title'>Why choose Easybank?</h3>
                    <p className='second-p-text'>
                    We leverage Open Banking to turn your bank account into your financial hub.
                    Control your finances like never before.
                    </p>
                </div>
                <div className="last-part">
                    {
                        Data.map(item => (
                            <div className="feature-box" key={item.id}>
                               <img src={item.icon} alt="" />
                               <h3>{item.title}</h3>
                               <p>{item.pText}</p>       
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SecondSection;
