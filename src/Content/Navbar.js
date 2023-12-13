<<<<<<< HEAD
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      
=======
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ActivePatient from './ActivePatient';

 const  Navbar= ()=> {
    return (
        <Router>
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
        <div className="p-3 m-0 border-0 bd-example">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/ActivePatient" className="nav-link">
                        Patient
                        </Link>
                       
                </li>
                <li className="nav-item">
<<<<<<< HEAD
                <Link to="/Specimen" className="nav-link">
=======
                <Link to="/ActivePatient" className="nav-link">
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
                        Specimen
                    </Link>
                </li>
                <li className="nav-item">
<<<<<<< HEAD
                <Link to="/Testing" className="nav-link">
=======
                <Link to="/ActivePatient" className="nav-link">
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
                    Testing
                    </Link>
                     
                </li>
                <li className="nav-item">
                <Link to="/ActivePatient" className="nav-link">
                Inventory
                    </Link>

                </li>
                <li className="nav-item">
                <Link to="/ActivePatient" className="nav-link">
                        Quality
                   </Link>
                </li>
                <li className="nav-item">
<<<<<<< HEAD
                <Link to="/Emergency" className="nav-link">
=======
                <Link to="/ActivePatient" className="nav-link">
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
                        Emergency
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/ActivePatient" className="nav-link">
                        Reports
                    </Link>
                </li>
            </ul>
<<<<<<< HEAD
           
=======
            <Routes>
                    <Route path="/ActivePatient" element = {<ActivePatient/>}  />
                    
                </Routes>
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212

            <div className="container text-center">
                <div className="row">
                    HOME
                </div>
            </div>
        </div>
     
<<<<<<< HEAD
   
    );
}

=======
        </Router>
    );
}
export default Navbar;
>>>>>>> 475a7af135a085880b26e92503d820f4b7ae4212
