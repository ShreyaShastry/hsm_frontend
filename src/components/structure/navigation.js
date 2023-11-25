import IntroSection from "../home/IntroSection";

//patient
import PatientLogin from "../patientPortal/PatientLogin";
import CreateAppointmentForm from "../patientPortal/CreateAppointmentForm";
import PatientRegistration from "../patientPortal/PatientRegistration";
import MyProfile from "../patientPortal/MyProfile";
import ViewBookedAppointments from "../patientPortal/ViewBookedAppointments";


import AdminPortal from "../admin/AdminPortal"



export const nav = [
    {path:"/",   name:"Curehub",    element:<IntroSection/>,      isMenu:true,    isPrivate:false  },    
    {path:"/patientregistration",   name:"Patient Registration",    element:<PatientRegistration/>,     isMenu:true,    isPrivate:false  },
    {path:"/patientlogin",   name:"Patient Login",    element:<PatientLogin/>,     isMenu:true,    isPrivate:false  },
    {path:'/myprofile',   name:"Patient Profile",    element:<MyProfile />,     isMenu:true,    isPrivate:true  },
    {path:'/viewmyappointments',   name:"View Booked Appointments",    element:<ViewBookedAppointments />,     isMenu:true,    isPrivate:true  },
    {path:"/createappointmentform",   name:"Book Appointment",    element:<CreateAppointmentForm/>,     isMenu:true,    isPrivate:true  },
    
    {path:"/adminportal",   name:"Admin Portal",    element:<AdminPortal/>,     isMenu:true,    isPrivate:false  },
    


]
