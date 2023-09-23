"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";

const FormContact = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");
  const [mostrarAlert, setMostrarAlert] = useState(false);

  const guardarContact = async (e) => {
    e.preventDefault();

    try {
      await db.collection("contacto").add({
        nombre,
        apellido,
        telefono,
        correo,
        comentario,
      });

      // Limpiar los campos del formulario después de guardar los datos
      setNombre("");
      setApellido("");
      setTelefono("");
      setCorreo("");
      setComentario("");

      setMostrarAlert(true);
    } catch (error) {
      console.error("Error al guardar la reservación:", error);
    }
  };

  useEffect(() => {
    // Después de 3 segundos, ocultar la Alert
    if (mostrarAlert) {
      const timer = setTimeout(() => {
        setMostrarAlert(false);
      }, 3000);

      // Limpiar el temporizador cuando el componente se desmonte
      return () => {
        clearTimeout(timer);
      };
    }
  }, [mostrarAlert]);

  return (
    <>
      <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Contáctame</h2>
        <form onSubmit={guardarContact}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="apellido"
              className="block mb-2 text-sm font-medium"
            >
              Apellido
            </label>
            <input
              type="text"
              id="apellido"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              placeholder="Apellido"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="telefono"
              className="block mb-2 text-sm font-medium"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="correo"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comentario"
              className="block mb-2 text-sm font-medium"
            >
              Comentario
            </label>
            <textarea
              id="comentario"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Escribe tu comentario aquí"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </form>
        {mostrarAlert && (
          <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
            ¡Mensaje enviado con éxito!
          </div>
        )}
      </div>
    </>
  );
};

export default FormContact;
