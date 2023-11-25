import { Link,Routes,Route } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import Footer from "../home/Footer";
import "../../App.css";
import CreateDoctor from "../admin/doctor/CreateDoctor";
import DoctorList from "../admin/doctor/DoctorList";
import EditDoctor from "../admin/doctor/EditDoctor";

//2.medicine
import CreateMedicine from "../admin/medicine/CreateMedicine";
import EditMedicine from "../admin/medicine/EditMedicine";
import MedicineList from "../admin/medicine/MedicineList";

//3.nurse
import CreateNurse from "../admin/nurse/CreateNurse";
import EditNurse from "../admin/nurse/EditNurse";
import NurseList from "../admin/nurse/NurseList";

export const RenderRoutes=()=>{
    const {user} = AuthData();
    return(
        <>
        
        <Routes>

            <Route path="/create-doctor" element={<CreateDoctor />} />
              <Route path="/doctor-list" element={<DoctorList />} />
              <Route path="/edit-doctor/:id" element={<EditDoctor />} />

              <Route path="/create-nurse" element={<CreateNurse />} />
              <Route path="/nurse-list" element={<NurseList />} />
              <Route path="/edit-nurse/:id" element={<EditNurse />} />

              <Route path="/create-medicine" element={<CreateMedicine />} />
              <Route path="/medicine-list" element={<MedicineList />} />
              <Route path="/edit-medicine/:id" element={<EditMedicine />} />

            
            {nav.map((r,i)=>{
                if(r.isPrivate && user.isAuthenticated){
                    return <Route key={i} path={r.path} element={r.element} />
                }else if(!r.isPrivate){
                    return <Route key={i} path={r.path} element={r.element} />
                }else return false
            })}
            
        </Routes>
        <Footer />
        </>

    )
}

export const RenderMenu = ()=>{
    const {user,logout} = AuthData()
    const MenuItem = ({r})=>{
        return(
            <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
        )
    }
    return(
        <div className="menu">
            {nav.map((r,i)=>{
                if(!r.isPrivate && r.isMenu){
                    return(
                        <MenuItem key={i} r={r}/>
                    )
                }else if(user.isAuthenticated && r.isMenu ) {
                    return(
                        <MenuItem key={i} r={r} />
                        
                    )
                }else return false
            })}
            {user.isAuthenticated ?
                <div className="menuItem"><Link to={'/'} onClick={logout}>Log Out</Link></div>
                :
                <div className="menuItem"><Link to={'/patientlogin'}></Link></div>
            }
        </div>
    )
}