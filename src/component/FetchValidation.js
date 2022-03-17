import React from 'react';
import ValidationList from './ValidationList';

const url = 'http://localhost:8000/validation';

export class FetchValidation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validations: [],
        };
    }

    componentDidMount(){
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                this.setState({validations: data})
            });
}

    render(){
        const {validations} = this.state;
        console.log(validations);
        return(
            <ValidationList data={validations}/>
        )
    }
}


export default FetchValidation;
