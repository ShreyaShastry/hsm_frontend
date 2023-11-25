import React from "react";
import "./OurServices.css";

const servicesData = [
  {
    id: 1,
    title: "Opthomology",
    description: "We care for your vision",
    image: "https://images.freeimages.com/images/large-previews/03a/stethoscope-1515855.jpg?fmt=webp&w=350",
  },
  {
    id: 2,
    title: "Pediatrics",
    description: "Working with small miracles everyday",
    image: "https://images.freeimages.com/images/large-previews/03a/stethoscope-1515855.jpg?fmt=webp&w=350",
  },
  {
    id: 3,
    title: "Cardiology    ",
    description: "Heart care",
    image: "https://images.freeimages.com/images/large-previews/03a/stethoscope-1515855.jpg?fmt=webp&w=350",
  },
  // Add more service data as needed
];

const OurServices = () => {
  return (
    <div className="our-services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-content">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <button className="know-more-button">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
