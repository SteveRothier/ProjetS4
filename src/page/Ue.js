import FetchUe from "../component/FetchUe";
import Navbar from '../component/Navbar.js';
import './style/Ue.css';

function Ue() {
  return (
    <>
      <Navbar />
    <div className="ressource">
        <FetchUe></FetchUe>
    </div>
    </>
  );
}

export default Ue;
