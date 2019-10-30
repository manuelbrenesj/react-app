
import React, { Component } from 'react';
import './App.css';

import tarea from './sample/tareas.json';

class App extends Component{

state = { //state = Definir datos que le pertenecen a un componente
  tareas: tarea
}

  render(){
    return <div>
      { this.state.tareas.map(e => <h1 key={e.id}>{e.nombre} - {e.descripcion}</h1>) }
    </div>
  }
}

// function Helloworld(props){
//   return(
//     <h1 id="hello">
//       {props.text}
//       <h3>{props.number}</h3>
//     </h1> //Esto es lo que se imprime, el valor de props esta en App()
//   )
// }

// class Helloworld extends React.Component{

//   state = {
//     show: true
//   }

//   toggleShow = () => {
//     this.setState({show: !this.state.show})
//   }

//   render(){
//     if(this.state.show){
//       return(
//         <h1 id="hello">
//           {this.props.text}
//           <h3>{this.props.number}</h3>
//           <button onClick={this.toggleShow}>Cambiar Show</button>
//         </h1> //Esto es lo que se imprime, el valor de props esta en App()
//       )
//     } else {
//         return <h1>
//           No hay elementos
//           <button onClick={this.toggleShow}>Cambiar Show</button>
//         </h1>
        
//     }
//   }
// }

// function App() {
//   return (
//     <div>
//       This is my component: 
//       <Helloworld text="Hola Manuel" number="123"/> 
//       <Helloworld text="Hola Daniel" /> 
//     </div>
//   );
// }

export default App;
