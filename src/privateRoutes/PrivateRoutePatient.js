import React from 'react';
import { Navigate, Routes } from 'react-router-dom';
//import { useAuth } from '../AuthContext';
//import PatientPortal from "../components/PatientPortal";
//import PatientPortal from '../components/PatientPortal';


const PrivateRoutePatient = ({ path, element }) => {
  //const { user } = useAuth();

  // Check if the user is authenticated
  //const isAuthenticated = user !== null;

  return (
    <Routes>
      {/*}
    <Route
      path={path}
      element={isAuthenticated ? element : <Navigate to="/PatientPortal" />}
    />
    <Route path="/Patientportal" element={<PatientPortal />}/>
  */}
  <Navigate to="/PatientPortal" />
    </Routes>
  );
};

export default PrivateRoutePatient;
