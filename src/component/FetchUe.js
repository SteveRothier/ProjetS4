import React from 'react';
import UeList from './UeList';

const url = 'http://localhost:8000/ue';

export class FetchUe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ue: [],
        };
    }

    componentDidMount(){
        fetch(url)
            .then((response) => response.json())
            .then(data => {
                this.setState({ue: data})
            });
}

    render(){
        const {ue} = this.state;
        console.log(ue)
        return(
            <UeList key={ue.id} data={ue}/> 

        )
    }
}


export default FetchUe;
