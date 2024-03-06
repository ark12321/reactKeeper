import React from 'react';
import './styles.css';

function Footer()
{
    let date = new Date();
    let year=date.getFullYear();

    return (
         <footer> 
            <p>copyright ©{year}</p> 
         </footer>
            
        
    );
}
export default Footer;