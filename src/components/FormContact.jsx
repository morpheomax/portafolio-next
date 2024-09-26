// "use client";

// import React, { useState, useEffect } from "react";
// import { db } from "@/firebase/firebase";

// export const FormContact = () => {
//   const [nombre, setNombre] = useState("");
//   const [apellido, setApellido] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [correo, setCorreo] = useState("");
//   const [comentario, setComentario] = useState("");
//   const [mostrarAlert, setMostrarAlert] = useState(false);

//   const guardarContact = async (e) => {
//     e.preventDefault();

//     try {
//       await db.collection("contacto").add({
//         nombre,
//         apellido,
//         telefono,
//         correo,
//         comentario,
//       });

//       // Limpiar los campos del formulario después de guardar los datos
//       setNombre("");
//       setApellido("");
//       setTelefono("");
//       setCorreo("");
//       setComentario("");

//       setMostrarAlert(true);
//     } catch (error) {
//       console.error("Error al guardar la reservación:", error);
//     }
//   };

//   useEffect(() => {
//     // Después de 3 segundos, ocultar la Alert
//     if (mostrarAlert) {
//       const timer = setTimeout(() => {
//         setMostrarAlert(false);
//       }, 3000);

//       // Limpiar el temporizador cuando el componente se desmonte
//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [mostrarAlert]);

//   return (
//     <>
//       <div className="max-w-3xl mx-auto p-4 border rounded-md shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">Contact me</h2>
//         <form
//           onSubmit={guardarContact}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <div>
//             <label htmlFor="nombre" className="block mb-2 text-sm font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               id="nombre"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//               placeholder="Nombre"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="apellido"
//               className="block mb-2 text-sm font-medium"
//             >
//               Last name
//             </label>
//             <input
//               type="text"
//               id="apellido"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               value={apellido}
//               onChange={(e) => setApellido(e.target.value)}
//               placeholder="Apellido"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="telefono"
//               className="block mb-2 text-sm font-medium"
//             >
//               Phone
//             </label>
//             <input
//               type="tel"
//               id="telefono"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               value={telefono}
//               onChange={(e) => setTelefono(e.target.value)}
//               placeholder="Teléfono"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="correo" className="block mb-2 text-sm font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="correo"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               value={correo}
//               onChange={(e) => setCorreo(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>
//           <div className="col-span-2">
//             <label
//               htmlFor="comentario"
//               className="block mb-2 text-sm font-medium"
//             >
//               Comment
//             </label>
//             <textarea
//               id="comentario"
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               rows="4"
//               value={comentario}
//               onChange={(e) => setComentario(e.target.value)}
//               placeholder="Escribe tu comentario aquí"
//               required
//             />
//           </div>

//           <div className="col-span-2 mt-4">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 ease-in-out"
//             >
//               Enviar
//             </button>
//           </div>
//         </form>
//         {mostrarAlert && (
//           <div className="mt-4 p-2 bg-green-100 text-green-700 rounded-md">
//             Message sent succesfully!
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";

export const FormContact = () => {
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
      console.error("Error al guardar el contacto:", error);
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
    <div
      className="max-w-3xl mx-auto p-8 bg-gray-100 dark:bg-gray-800 rounded-md shadow-xl border-2 border-black dark:border-white transition-style"
      transition-style="in:wipe:bottom-left"
    >
      {/* Título */}
      <h2
        className="text-4xl font-extrabold mb-8 text-center text-gray-900 dark:text-white uppercase transition-style"
        transition-style="in:wipe:top"
      >
        Contacto
      </h2>

      {/* Formulario */}
      <form
        onSubmit={guardarContact}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div>
          <label
            htmlFor="nombre"
            className="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 uppercase"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-all"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="John"
            required
          />
        </div>

        <div>
          <label
            htmlFor="apellido"
            className="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 uppercase"
          >
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-all"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Doe"
            required
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 uppercase"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-all"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="+56 (9) 555-5555"
            required
          />
        </div>

        <div>
          <label
            htmlFor="correo"
            className="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            id="correo"
            className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-all"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="comentario"
            className="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-200 uppercase"
          >
            Comentario
          </label>
          <textarea
            id="comentario"
            className="w-full px-4 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border-b-2 border-black dark:border-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-300 transition-all"
            rows="5"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Tu mensaje..."
            required
          />
        </div>

        <div className="col-span-1 md:col-span-2 mt-6">
          <button
            type="submit"
            className="w-full py-3 px-5 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider border-2 border-black dark:border-white transition-transform transform hover:scale-105"
          >
            Enviar
          </button>
        </div>
      </form>

      {/* Alert Message */}
      {mostrarAlert && (
        <div
          className="mt-6 p-4 bg-green-500 text-white font-semibold rounded-lg text-center transition-style"
          transition-style="in:wipe:top"
        >
          Mensaje enviado con éxito!
        </div>
      )}
    </div>
  );
};
