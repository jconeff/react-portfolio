import React from 'react';
import '../../assets/css/nav.css';


function Nav(props) {
    const navLinks = ['About', 'Portfolio',  'Resume', 'Contact',];
    return(
        <header>
            <nav>
                <ul className='flex-row'>
                   <h4 className='firstname' >Jessica <span className='name'>Coneff</span> </h4>
                 {navLinks.map(tabs => (
                     <li className='nav-link' key={tabs}>
                         <a href={'#' + tabs.toLowerCase()}
                         onClick={() => props.setCurrentPage(tabs)}
                         className={
                             props.currentPage === tabs ? 'active-nav' : 'nav-link'
                         }
                         >
                            {tabs}
                         </a>
                     </li>
                 ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;