
export function ValidationItem({data}) {
    console.log(data);
    const {idSemestre,moyenne1,moyenne2,moyenne3,moyenne4, moyenne5, moyenne6} = data;
    return(
        <>
        <div className="validation">
            <div>Semestre {idSemestre} </div>
            <div>{moyenne1}</div>
            <div>{moyenne2}</div>
            <div>{moyenne3}</div>
            <div>{moyenne4}</div>
            <div>{moyenne5}</div>
            <div>{moyenne6}</div>
        </div>   
        </>
    );
}
export default ValidationItem;