import React from 'react';
import Button from '../Button/Button';
import './Main.css';

function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div className="main-section">
                <div className="info">
                    <h1 className="title">Next generation digital banking</h1>
                    <p className='p-text'>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button text={'Request Invite'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
