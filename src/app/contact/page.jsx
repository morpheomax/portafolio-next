"use client";
import { FormContact } from "@/components/FormContact";
import React from "react";


const page = () => {
  return (
    <section className="w-full min-h-screen p-8 bg-gray-100 dark:bg-gray-900">
      {/* Título de la Sección */}
      {/* <h2
        className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-style"
        transition-style="in:wipe:left"
      >
        Contact Me
      </h2> */}

      {/* Formulario de Contacto */}
      <div
        className="w-full max-w-4xl mx-auto transition-style"
        transition-style="in:wipe:right"
      >
        <FormContact />
      </div>

      
    </section>
  );
};

export default page;
