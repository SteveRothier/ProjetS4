import React from 'react';
import NoteList from './NoteList';

const UeUrl = 'http://localhost:8000/ue';
const RessourceUrl = 'http://localhost:8000/ressource';

export class FetchNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ue: [],
        };
    }

    componentDidMount(){
        fetch(UeUrl)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({ue: data})
            });
}
    render(){
        return(
            <NoteList key={this.state.ue.id} data={this.state.ue}/> 
        )
    }
}

export default FetchNote;