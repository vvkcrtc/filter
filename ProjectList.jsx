
function ProjectList(props){

  function makeImg(project){
    return (
      <img src={project.img} border="2" hspace="5" vspace="7" alt=" "/>
    )
  }
  return (
    <div align="justify">
      {props.projects.map(makeImg,this)}
    </div>
  )
}

export default ProjectList;