import React from 'react';
import './style/bouton.css';

export function BoutonSemestre() {
    return (
        <>
            <h2 className="h2Btn">Semestres</h2>
            <div className="ligneBtnSem">
                <div className="btnSem">
                    <p>S1</p>
                </div>
                <div className="btnSem">
                    <p>S2</p>
                </div>
                <div className="btnSem">
                    <p>S3</p>
                </div>
                <div className="btnSem">
                    <p>S4</p>
                </div>
                <div className="btnSem">
                    <p>S5</p>
                </div>
                <div className="btnSem">
                    <p>S6</p>
                </div>
            </div>
        </>
    );
}

export default BoutonSemestre;