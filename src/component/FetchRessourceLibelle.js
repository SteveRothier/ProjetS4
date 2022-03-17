import React from 'react';
import RessourceLibelleList from './RessourceLibelleList';

const url = 'http://localhost:8000/ressource';

export class FetchRessourceLibelle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "ressource",
            ressources: [],
            ressourceType: 
            {
                "ressource": "MR",
                "sae": "MS",
                "ue": "UE"
            },
        };
    }

    componentDidMount(){
        const tabRessource = [];
        const {nom}= this.state;
        
        fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
          data.map((ressource) => {
        
              if(nom===ressource.typeRessource){
                tabRessource.push(ressource);
              }
          })
          this.setState({ressources: tabRessource});
        });
        
    }

    render(){
        const {ressources, ressourceType, nom} = this.state;
        return(
            <RessourceLibelleList key={ressources.id} data={ressources} type={ressourceType[nom]}/> 
        )
    }
}


export default FetchRessourceLibelle;
