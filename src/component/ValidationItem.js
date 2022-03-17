
export function ValidationItem({data}) {
    console.log(data);
    const {idSemestre,moyenne1,moyenne2,moyenne3,moyenne4, moyenne5, moyenne6} = data;
    let validation= "false";
    let moyenneGen= Math.round(((moyenne1 + moyenne2 + moyenne3 + moyenne4 + moyenne5 + moyenne6)/6)*100)/100;
    if (moyenneGen >= 10){
        validation="true";
    }
    return(
        <>
        <tr>
            <td>Semestre {idSemestre}</td>
            <td>{moyenneGen}</td>
            <td>{moyenne1}</td>
            <td>{moyenne2}</td>
            <td>{moyenne3}</td>
            <td>{moyenne4}</td>
            <td>{moyenne5}</td>
            <td>{moyenne6}</td>
            <td className={validation}></td>
        </tr>   
        </>
    );
}
export default ValidationItem;