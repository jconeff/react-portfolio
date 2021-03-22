import React from 'react';
import myDOCX from '../../assets/Resume/coneff.resume2021.docx';
import '../../assets/css/resume.css';

function Resume() {
    return(
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5 flex-row">
                <h2 className="text-center w100 mb-2">Resume</h2>

              <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">

        

            <p class="lead1">
              Full stack web developer with a background in digital design as well as health care. 
              Associate of Science in Digital Design and Graphics and Certificate in Full Stack Web 
              Development from the University of Central Florida Coding Boot Camp. 
              Great leadership and working well with a team from years of experience in Health Care.
               Creative and meticulous from experience with graphic design and illustrating.
              
            </p>
           


                <div class="row">
            <ul><h6 class='title'>Languages:</h6>
              <li>JavaScript</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>SQL</li>
              <li>NoSQL</li>
            </ul>
            <ul><h6 class='title'>Applications:</h6>
              <li>GitHub</li>
              <li>Insomnia</li>
              <li>MySQL</li>
              <li>Visual Studio Code</li>
              <li>Sequelize</li>
            </ul>
            <ul><h6 class='title'>Tools:</h6>
              <li>Node.js</li>
              <li>Handlebars</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </div>

          </div>
        
        
          
        </div>
      </div>
               <button><a href={myDOCX} download='coneff.resume2021.docx' className='btn-link'>Resume&nbsp;<span className="iconify" data-icon="fe:download" data-inline="false"></span></a></button>
           </div>
       </section>
    )
}

export default Resume;