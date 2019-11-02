
import React, { Component } from 'react';
import TareaSimple from './TareaSimple';

class Task extends Component {
    render(){
        return this.props.tareas.map(e => <TareaSimple tar={e} key={e.id} />);
    }
}

export default Task;