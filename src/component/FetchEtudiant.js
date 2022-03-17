import React from 'react';
import EtudiantList from './EtudiantList';
import EtudiantItem from './EtudiantItem';

const url = 'http://localhost:8000/etudiant/1';

export class FetchEtudiant extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etudiant: [],
        };
    }

    componentDidMount(){
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({etudiant: data})
            });
}
on
    render(){       
        return(
            <EtudiantItem key={this.state.etudiant.id} data={this.state.etudiant}/> 
        )
    }
}


export default FetchEtudiant;
