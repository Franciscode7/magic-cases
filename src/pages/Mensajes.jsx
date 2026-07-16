import { useState } from "react"
// import { supabase } from "../lib/supabaseClient" 

export default function Mensajes() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })

  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function guardarMensaje(e) {
    e.preventDefault()
    setLoading(true)

    try {

    //   // 1️⃣ Guardar en Supabase
    //   const { error } = await supabase
    //     .from("mensajes")
    //     .insert([{
    //       nombre: form.nombre,
    //       email: form.email,
    //       mensaje: form.mensaje
    //     }])

    // if (error) throw error

    // 2️⃣ Enviar correos (Netlify Function)
    const response = await fetch("http://localhost:3000/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: form.nombre,
        email: form.email,
        mensaje: form.mensaje
      })
    })

    if (!response.ok) {
      throw new Error("Error enviando correos")
    }

    // ✅ éxito
    alert("Mensaje enviado correctamente ✅")
    setForm({ nombre: "", email: "", mensaje: "" })

  } catch (err) {
    console.error(err)
    alert("Ocurrió un error al enviar el mensaje")
  }

  setLoading(false)
  }

  return (

    <div className="max-w-lg mx-auto my-10 p-8 bg-white rounded-2xl shadow-xl border border-gray-100 mt-16">
      <h1 className="text-3xl font-bold text-[#E5BA5A] mb-6 text-center mt-6">Solicita tu cotización</h1>

      <form onSubmit={guardarMensaje} className="flex flex-col gap-4">
        {/* Campo Nombre */}
        <div className="form-control">
          <label className="label mb-2 mt-4">
            <span className="label-text font-medium text-blue-500">¿Cuál es tu nombre?</span>
          </label>
          <input
            name="nombre"
            placeholder="Ej. Juan Pérez"
            className="rounded-lg input input-bordered input-primary w-full bg-gray-50 text-black mb-3 border-2 border-gray-200 focus:border-blue-500 outline-none"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Email */}
        <div className="form-control">
          <label className="label mb-2">
            <span className="label-text font-medium text-blue-500">Correo electrónico</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="correo@ejemplo.com"
            className="rounded-lg input input-bordered input-primary w-full bg-gray-50 text-black mb-3 border-2 border-gray-200 focus:border-blue-500 outline-none"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Campo Mensaje */}
        <div className="form-control">
          <label className="label mb-2">
            <span className="label-text font-medium text-blue-500">Tu mensaje</span>
          </label>
          <textarea
            name="mensaje"
            placeholder="Cuéntanos en qué podemos ayudarte..."
            className="rounded-lg textarea textarea-bordered textarea-primary h-32 md:w-full text-base bg-gray-50 text-black mb-3 border-2 border-gray-200 focus:border-blue-500 outline-none"
            value={form.mensaje}
            onChange={handleChange}
            required
          />
        </div>

        {/* Botón de Enviar */}
        <button 
          className={`btn bg-sky-900 hover:bg-sky-800 border-none mt-4 text-white font-medium rounded-lg ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  )
}