import React from 'react';
import RessourceList from './RessourceList';

const url = 'http://localhost:8000/ressource';

export class FetchRessource extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "sae",
            ressources: [],
            ressourceType: 
            {
                "ressource": "MR",
                "sae": "MS",
                "ue": "UE"
            },
        };
    }

    getRessource() {
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

    componentDidMount(){
        this.getRessource();
    }

    render(){
        const {ressources, ressourceType, nom} = this.state;
        console.log(ressources)
        return(
            <RessourceList key={ressources.id} data={ressources} type={ressourceType[nom]}/> 
        )
    }
}


export default FetchRessource;