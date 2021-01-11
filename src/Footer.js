import React from 'react'

function Footer() {
    return (
        <div className="container-fluid text-light" style={{ backgroundColor: '#232F3E' }}>
            <div className="row  p-5">
                <div className="col-6 col-sm-6 col-md-2 offset-md-2">
                    Get to Know Us
                    <ul className="list-unstyled mt-1" style={{ fontSize: '14px', color: '#ddd', lineHeight : '24px' }}>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Press Release</li>
                        <li>Amazon Cares</li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-2">
                    Connect With Us
                    <ul className="list-unstyled mt-1" style={{ fontSize: '14px', color: '#ddd', lineHeight : '24px' }}>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-2">
                    Make Money with Us
                    <ul className="list-unstyled mt-1" style={{ fontSize: '14px', color: '#ddd', lineHeight : '24px' }}>
                        <li>Sell On Amazon</li>
                        <li>Sell under Amazon Accelerator</li>
                        <li>Become an Affiliate</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Advertise Your Products</li>
                    </ul>
                    </div>
                <div className="col-6 col-sm-6 col-md-2">
                    Let Us Help You
                    <ul className="list-unstyled mt-1" style={{ fontSize: '14px', color: '#ddd', lineHeight : '24px' }}>
                        <li>Covid 19 and Amazon</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Become an Affiliate</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
                
            </div>
            <div className="bg-dark p-1 text-center">
                <p>This is an Amazon clone done for project purpose. Developed by Ritesh Gupta. </p>
            </div>
        </div>
    )
}

export default Footer
