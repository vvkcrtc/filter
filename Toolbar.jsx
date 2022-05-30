import './App.css';


function Toolbar(props){
 

 var buttonId = 0;

 function onClickFunction(filter) {

  props.onSelectFilter(filter);
}

 function makeButton(filter) {    
   buttonId ++;
   return (        
    <button  id = {"Button"+buttonId}          
      onClick={() => onClickFunction(filter)}> 
      {filter}        
    </button>    
    );
  }

  return (
    <div>
      {props.filters.map(makeButton,this)}
    </div>
  )
  
}

  export default Toolbar;