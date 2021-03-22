import React from 'react';
import coneff from '../../assets/images/me.png';
import '../../assets/css/about.css';


function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5 flex-row">
                <h2 className="text-center w100 mb-2">About</h2>
                <div className="w25">
                    <img className="w100 circle px-1 py-1" id="profile-pic" src={coneff} alt="jessica coneff pic" />
                </div>
                <div className="w75 pl-2">
                    <p>
                    <section id="about">
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
           


          </div>
        
        
          
        </div>
      </div>
  </section>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;