import React, {useState} from 'react';
import Modal from '../Modal';
import '../../assets/css/projects.css';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
        {
          name: 'Live Covid-19 Stats',
          description: 'Summary: U.S daily COVID live stats, self diagnostic quiz, and nearby clinic locator',
          tools: 'Tools: HTML, CSS, JavaScript, Bootstrap, moment.js, API',
          role: 'Role: Developed both front end and back end of home page. Use of local storage, API, moment.js, U.S state loop, and math function to create changing color key of states.',
          dUrl: 'https://gabrielazalta.github.io/COVID-19-Live-Stats-Support/',
          gUrl: 'https://github.com/jconeff/COVID-19-Live-Stats-Support'
        
        },
        {
          name: 'Weather Dashboard',
          description: 'Summary: Weather app that provides current and future weather forecasts in cities.',
          tools: 'Tools: HTML, CSS, JavaScript, jQuery, API, Bootstrap, moment.js',
          role: 'Role: Sole author',
          dUrl: 'https://jconeff.github.io/weatherdashboard/',
          gUrl: 'https://github.com/jconeff/weatherdashboard'
        },
        {
          name: 'Draft Room',
          description: 'Summary: CMS-style blog created for a community of beer lovers to discuss and share experiences of beers and breweries.',
          tools: 'Tools: Express, Handlebars, MySQL, JavaScript, Sequelize, Node, Bcrypt, CSS, bootstrap, html',
          role: 'Role: Back end',
          dUrl: 'https://sleepy-island-61088.herokuapp.com/',
          gUrl: 'https://github.com/jconeff/draft-room'
        },
        {
          name: 'Tech-Blog',
          description: 'Summary: A user can create an account and begin to create, edit, and delete a post.',
          tools: 'Tools: Express, Handlebars, MySQL, JavaScript, Sequelize, Node, Bcrypt, CSS, bootstrap, html',
          role: 'Role: Sole author',
          dUrl: 'https://intense-dawn-28010.herokuapp.com/',
          gUrl: 'https://github.com/jconeff/tech-blog'
        },
        {
          name: 'Note Taker',
          description: 'Summary: Express.js application for taking notes. Add, edit, delete notes.',
          tools: 'Tools: Express, Handlebars, MySQL, JavaScript, Sequelize, Node, Bcrypt, CSS, bootstrap, html',
          role: 'Role: sole author',
          dUrl: 'https://github.com/jconeff/NoteTaker',
          gUrl: 'https://github.com/jconeff/NoteTaker'
        },
        {
          name: 'Food Festival',
          description: 'Offline functionality',
          tools: 'Tools: JavaScript, Node, CSS,  html',
          role: 'Tools: HTML, CSS, JavaScript, jQuery, API, Bootstrap, moment.js',
          dUrl: 'https://jconeff.github.io/food-festival/',
          gUrl: 'https://github.com/jconeff/food-festival'
        }
    ];

    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return(
      <div className="w75 bg-dark px-3 py-5 flex-row">
        <div className='container'>
        <h3>Portfolio</h3>
        <div class="col-lg-8 mx-auto">
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div className='project-div'>
            </div>
            
                {projects.map((image, i) => (
                <div className='test'>
                       <div class="text-center w100 mb-2">
                   
                </div>
                    <img
                        src={require(`../../assets/Projects/${i}.jpg`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image, i)}
                        className='img-thumbnail project-img'
                        key={image.name}
                        
                    />
                    
          
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}

export default ProjectList