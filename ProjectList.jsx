import './App.css';

function ProjectList(props){

   function makeImg(project){
       return (
        <img src={project.img} alt="альтернативный текст"/>
       )
    }
  return (
      <div>
          {props.projects.map(makeImg,this)}
      </div>
  )
}

export default ProjectList;