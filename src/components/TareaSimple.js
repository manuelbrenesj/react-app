
import React, { Component } from 'react';
import './TareaSimple.css'

class Task extends Component {

    estilosTareas(){
        return{
            fontSize: '25px',
            background: this.props.tar.done ? 'green' : 'violet'
        }
    }

    render(){

        const { tar } = this.props;

        return <div className="red">
            <p style={this.estilosTareas()}>{this.props.tar.id} - </p>
            {tar.nombre} - 
            {tar.descripcion} -
            {tar.done} 
            <input type="checkbox" />
            <button style={btnDelete}> 
                boton 
            </button>
        </div>
    }
}

const btnDelete = {
    fontSize: '18px',
    color: 'blue'
}

export default Task;