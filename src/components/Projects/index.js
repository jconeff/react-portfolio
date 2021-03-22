import React, {useState} from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projects = [
        {
          name: 'Grocery aisle',
          url: 'projects',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          url: 'projects',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          url: 'projects',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          url: 'projects',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          url: 'projects',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        }
    ];

    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return(
        <div className='container'>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div className='project-div'>
                {projects.map((image, i) => (
                <div className='test'>
                    <img
                        src={require(`../../assets/Projects/${i}.jpg`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image, i)}
                        className='img-thumbnail project-img'
                        key={image.name}
                    />
                    <a href={image.url} target='_blank' rel='noreferrer' className='dest-links'>Go To Project</a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectList