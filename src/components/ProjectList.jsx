"use client";
import React from "react";
import Link from "next/link";

const ProjectList = () => {
  const list = [
    {
      title: "Landing Page",
      img: "https://res.cloudinary.com/dysowtjj4/image/upload/v1695939122/landing_proy_1_obahot.png",
      url: "https://morpheomax.github.io/proyecto_1/",
      desc: "Simple website design",
    },
    {
      title: "CRUD de Gastos",
      img: "https://res.cloudinary.com/dysowtjj4/image/upload/v1695948949/CRUD_proy_2_sbvlwp.png",
      url: "https://morpheomax.github.io/proyecto_2/",
      desc: "CCRUD expense list in JS",
    },
    {
      title: "Dashboard",
      img: "https://res.cloudinary.com/dysowtjj4/image/upload/v1695949120/Dashboard_proy_3_dn3fb8.png",
      url: "https://morpheomax.github.io/api_chart/",
      desc: "User dashboard from API",
    },
    {
      title: "Restaurant App",
      img: "https://res.cloudinary.com/dysowtjj4/image/upload/v1695949416/restaurant-app-proy-4_qp0fmh.png",
      url: "https://proyecto4-site-restaurant.netlify.app/",
      desc: "Landing with booking system in Firebase",
    },
    {
      title: "E-commerce",
      img: "https://res.cloudinary.com/dysowtjj4/image/upload/v1695949529/ecommerce_proy_5_o5zvil.png",
      url: "https://proy5-ecommerce.netlify.app/",
      desc: "E-commerce system in Stack MERN",
    },
  ];

  return (
    <>
      <h2 className="mt-28 text-3xl uppercase text-center text-white mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        My Projects
      </h2>
      <div className="container mx-auto ">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link
                    href={item.url}
                    target="_blank"
                    className="bg-purple-800/95 rounded-full p-2 text-white hover:scale-105 transition-transform duration-200"
                  >
                    Ver Proyecto
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
