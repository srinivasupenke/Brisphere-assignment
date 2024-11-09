import React from "react";

import "../assets/styles/ServiceList.css";
import wifi_icon from "../assets/images/wi-fi.png";
import healthy_meal from "../assets/images/eco-food.png";
import home_icon from "../assets/images/home.png";
import transport from "../assets/images/car.png";
import food_delivery from "../assets/images/motorbike.png";
import tourism from "../assets/images/tourism.png";
import job_icon from "../assets/images/businessman.png";
import rental_service from "../assets/images/rental-service.png";
import online_shop from "../assets/images/shopping-cart.png";

const serviceslist = [
  {
    service_icon: wifi_icon,
    service_name: "High Speed Internet",
    service:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    service_icon: healthy_meal,
    service_name: "Healthy Meals",

    service:
      "A healthy breakfast and pleasant dinner be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere.",
  },
  {
    service_icon: home_icon,
    service_name: "Homely Stay",
    service:
      "Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts providedin your space",
  },
  {
    service_icon: transport,
    service_name: "Transportation",
    service:
      "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
  },
  {
    service_icon: food_delivery,

    service_name: "Food Delivery",
    service:
      "Optical fiber connections provided in nat only in your cabins but rather to all of the Brisphore sconic working spaces and dinning areas.",
  },
  {
    service_icon: tourism,
    service_name: "Tourism",
    service:
      "Optical fiber connections provided in nat only in your cabins but rather to all of the Brisphore sconic working spaces and dinning areas.",
  },
  {
    service_icon: job_icon,
    service_name: "Job",
    service:
      "Optical fiber connections provided in nat only in your cabins but rather to all of the Brisphore sconic working spaces and dinning areas.",
  },
  {
    service_icon: rental_service,
    service_name: "Rental Service",
    service:
      "Optical fiber connections provided in nat only in your cabins but rather to all of the Brisphore sconic working spaces and dinning areas.",
  },
  {
    service_icon: online_shop,
    service_name: "Online Shop",
    service:
      "Optical fiber connections provided in nat only in your cabins but rather to all of the Brisphore sconic working spaces and dinning areas.",
  },
];

function ServiceList() {
  return (
    <section id="services">
      <div>
        <h2>Services</h2>
        <hr />
        <ul>
          {serviceslist.map((service, index) => (
            <li key={index} className="each-service-list">
              <img src={service.service_icon} alt="" />
              <h1>{service.service_name}</h1>
              <p>{service.service}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ServiceList;
