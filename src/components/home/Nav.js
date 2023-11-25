import {Link} from "react-router-dom";
import './NavbarComp.css'; 
function Nav()
{
    return(
        <nav class="navbar bg-warning">
            <Link to="/" class="navbar-brand mx-3">Hospital</Link>
            <div class="nav">
                <Link to="/create-doctor" class="nav-link mx-1">Create Doctor</Link>
                <Link to="/doctor-list" class="nav-link mx-1">Doctor List</Link>
            </div>
            <div class="nav">
                <Link to="/create-nurse" class="nav-link mx-1">Create Nurse</Link>
                <Link to="/nurse-list" class="nav-link mx-1">Nurse List</Link>
            </div>
            <div class="nav">
                <Link to="/create-user" class="nav-link mx-1">Create User</Link>
                <Link to="/user-list" class="nav-link mx-1">User List</Link>
            </div>
            <div class="nav">
                <Link to="/create-medicine" class="nav-link mx-1">Create Medicine</Link>
                <Link to="/medicine-list" class="nav-link mx-1">Medicine List</Link>
            </div>
        </nav>
    )
}
export default Nav;