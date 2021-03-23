import React from 'react';
import myDOCX from '../../assets/Resume/coneff.resume2021.docx';
import '../../assets/css/resume.css';

function Resume() {
    return(
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark px-5 py-5 flex-row">
                <h2 className="text-center w100 mb-2">Experience</h2>

              <div class="container">
      <div class="row">
        <div class="col-lg- mx-auto">

        


               
            <ul><h6 class='title'>Certified Medical Assistant	</h6>
            <h6>May 2019- November 2019</h6>
            <p>Practiced patient safety both clinical and non-clinical in a fast paced office among physicians and other medical staff.</p>
              <li>●	Received an 98% or higher each month for overall satisfactory score from patient surveys and safety scores. </li>
              <li>●	Received multiple recognition letters from both patients and medical staff.</li>
              <li>●	Roomed patients by thoroughly communicating with patients about their medical history while documenting, and taking patients vital signs.</li>
              <li>●	Worked with a large team of medical staff from different departments.</li>
              <li>●	Input medical patient information into EMR(electronic medical records) and answered both physician and patient concern through EMR or live calls.</li>
            </ul>
            <ul><h6 class='title'>Administrative Medical Assistant	</h6>
            <h6>March 2018- May2019</h6>
              <p>Handled all patients for two Ohio Health Physician offices ensuring medication refills
                 and submitting prior authorizations through patient insurance companies using patient medical history.</p>
              <li>●	Created an auto fill form shortcut for staff to utilize when documenting patient medical refills to enhance workflow, the form was successful
                 and became a standard practice when documenting medication refills throughout all of the Ohio Health departments.</li>
              <li>●	Spoke with patients daily, as well as communicating between physicians, medical assistants and insurance companies.</li>
              <li>●	Handle two Ohiohealth primary care physician offices, working with nine physicians.</li>
   
            </ul>
            <ul><h6 class='title'>Certified Medical Assistant	</h6>
            <h6>July 2017- March 2018</h6>
              <p>Practiced patient safety both clinical and non-clinical in a fast paced gastro office among physicians and other medical staff.</p>
              <li>●	Overall increased patient satisfaction scores and safety scores 
                for the entire department, making branch location the highest scores overall for consecutive months. </li>
              <li>●	Roomed patients by thoroughly communicating with patients about their medical history while documenting, and taking patients vital signs.</li>
              <li>●	Received an 98% or higher each month for overall satisfactory score from patient surveys. </li>
      
            </ul>
          </div>

        
        
        
          
        </div>
      </div>
               <button><a href={myDOCX} download='coneff.resume2021.docx' className='btn-link'>Resume&nbsp;<span className="iconify" data-icon="fe:download" data-inline="false"></span></a></button>
           </div>
       </section>
    )
}

export default Resume;