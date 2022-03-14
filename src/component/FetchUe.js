import React from 'react';
import RessourceList from './RessourceList';

const url = 'http://localhost:8000/ue';

export class FetchUe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "ue",
            ue: [],
            ressourceType: 
            {
                "ressource": "MR",
                "sae": "MS",
                "ue": "UE"
            },
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
        const {ue, ressourceType, nom} = this.state;
        console.log(ue)
        return(
            <RessourceList key={ue.id} data={ue} type={ressourceType[nom]}/> 
        )
    }
}


export default FetchUe;
