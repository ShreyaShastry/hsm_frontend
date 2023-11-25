import React from "react";
import "./MeetOurDoctors.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    image: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Pediatrician",
    image: "https://cdn.pixabay.com/photo/2017/01/29/21/16/nurse-2019420_640.jpg", // Replace with actual image paths
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    specialization: "Orthopedic Surgeon",
    image: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808_640.jpg", // Replace with actual image paths
  },
  {
    id: 4,
    name: "Dr. Sarah Brown",
    specialization: "Dermatologist",
    image: "https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.webp?b=1&s=612x612&w=0&k=20&c=XO54ySpDSrs35CPXsvuXw05j1e0aCNv9Hl33q1TwNN4=", // Replace with actual image paths
  },
  {
    id: 5,
    name: "Dr. William Davis",
    specialization: "Ophthalmologist",
    image: "/images/doctor5.jpg", // Replace with actual image paths
  },
  {
    id: 6,
    name: "Dr. Laura White",
    specialization: "Neurologist",
    image: "/images/doctor6.jpg", // Replace with actual image paths
  },
  {
    id: 7,
    name: "Dr. Mark Anderson",
    specialization: "General Practitioner",
    image: "/images/doctor7.jpg", // Replace with actual image paths
  },
  {
    id: 8,
    name: "Dr. Emily Wilson",
    specialization: "Obstetrician",
    image: "/images/doctor8.jpg", // Replace with actual image paths
  },
  {
    id: 9,
    name: "Dr. Robert Lee",
    specialization: "ENT Specialist",
    image: "/images/doctor9.jpg", // Replace with actual image paths
  },
  {
    id: 10,
    name: "Dr. Lisa Taylor",
    specialization: "Psychiatrist",
    image: "/images/doctor10.jpg", // Replace with actual image paths
  },
  {
    id: 11,
    name: "Dr. Christopher Clark",
    specialization: "Urologist",
    image: "/images/doctor11.jpg", // Replace with actual image paths
  },
  {
    id: 12,
    name: "Dr. Anna Martinez",
    specialization: "Gynecologist",
    image: "/images/doctor12.jpg", // Replace with actual image paths
  },
  // Add more doctors with images as needed
];

const MeetOurDoctors = () => {
    return (
      <div className="meet-our-doctors">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-cards">
          {doctorsData.map((doctor, index) => (
            <div key={doctor.id} className="doctor-card">
              <div className="bubble-container">
                {[...Array(10)].map((_, bubbleIndex) => (
                  <div key={bubbleIndex} className="bubble"></div>
                ))}
              </div>
              <img src={doctor.image} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <button className="appointment-button">Book Appointment</button>
              <button className="know-more-button">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};
  export default MeetOurDoctors;
