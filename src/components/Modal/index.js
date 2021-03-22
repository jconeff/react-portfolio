import React from 'react';
import '../../assets/css/modal.css';


function Modal({onClose, currentProject}) {
    const {name, description,tools, role, dUrl, gUrl, index} = currentProject;
    return(
        
        <div className='modal-backdrop'>
            <div className='modal-container'>
           
            <div className="w75 bg-dark px-5 py-5 flex-row">
                
        
            <h4 className="text-center w100 mb-1">{name}</h4>
            
            <div className="w60 bg-dark px-5 py-2 flex-row">
                <img src={require(`../../assets/Projects/${index}.jpg`).default}
                alt='current-project'
                className='modal-project' />
                  </div>
                
              
                  <div class="desc-col-lg-12 mx-auto">
              
                <p className='modal-desc'>{description}</p>
                <p className='modal-desc'>{tools}</p>
                <p className='modal-desc'>{role}</p>
                <p className='modal-desc'><a href ={dUrl} target='blank'>Depoly Project Here</a></p>
                <p className='modal-desc'><a href ={gUrl} target='blank'>Github Code</a></p>
                
                
                
               
              
                <button type='button' className='modal-btn' onClick={onClose}>Close</button>
                </div>  
                </div>
                </div>
                </div> 
             
    
           
         
            
           
      
      
        
      
    )
}

export default Modal;