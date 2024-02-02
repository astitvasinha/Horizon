import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "We specialize in crafting seamless digital experiences that captivate audiences and elevate brands. Our expert team combines cutting-edge UI/UX practices to deliver intuitive interfaces, visually stunning designs, and a flawless user journey. Transform your online presence with us – where every click is a delightful experience.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "We provide comprehensive web development services that help businesses establish a strong online presence. Our team of experienced developers and designers use the latest technologies and industry best practices to build responsive, user-friendly, and visually appealing websites that are tailored to meet the specific needs of each client.",
  },
  {
    id: 3,
    image: Image3,
    title: "Digital Marketing",
    description:
      "We offer a range of digital marketing services that help businesses to reach a wider audience and grow their online presence. Our team of experts can help with search engine optimization, social media marketing, and pay-per-click advertising to help your business succeed online.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
