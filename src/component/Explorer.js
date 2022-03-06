import React from 'react';
import FetchEtudiant from './FetchEtudiant';
import PropTypes from 'prop-types';


const url = "http://localhost:8000/etudiant";

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            etudiants: []
        };
    }
    componentDidMount() {
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    etudiants: data.etudiant
                })
            })
    }
    render() {
        return (
            <>
                <div>
                    <FetchEtudiant data={this.state.etudiants} />
                </div>
            </>
        );
    }
}

export default Explorer;
