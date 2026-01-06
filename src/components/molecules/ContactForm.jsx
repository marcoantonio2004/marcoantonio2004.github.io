import { useState, useRef, useMemo } from "react";

function Label({ children }) {
  return (
    <label className="block text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
      {children}
    </label>
  );
}

function Input({ ...rest }) {
  return (
    <input
      className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-blue-700 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100
      placeholder-gray-400 dark:placeholder-gray-500
      focus:border-blue-500 dark:focus:border-blue-400 
      focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900
      transition-all duration-300 outline-none
      hover:border-blue-300 dark:hover:border-blue-600"
      {...rest}
    />
  );
}

function TextArea({ ...rest }) {
  return (
    <textarea
      className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 dark:border-blue-700 
      bg-white dark:bg-gray-800 
      text-gray-900 dark:text-gray-100
      placeholder-gray-400 dark:placeholder-gray-500
      focus:border-blue-500 dark:focus:border-blue-400 
      focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900
      transition-all duration-300 outline-none resize-none
      hover:border-blue-300 dark:hover:border-blue-600"
      {...rest}
    />
  );
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const data = {
      nombre: nameRef.current.value,
      correo: emailRef.current.value,
      asunto: subjectRef.current.value,
      mensaje: messageRef.current.value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyOOlgYWwM9-JFIIHF7kmJNK83vhf0uPnUKeuEyMPZgZJ7y-iv-jWejjCpmnKnIY8LA/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      setSuccess(true);

      nameRef.current.value = "";
      emailRef.current.value = "";
      subjectRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      alert("❌ Error al enviar el formulario");
    }

    setLoading(false);
  };

  const SubmitButton = useMemo(
    () => (
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-800 
        text-white font-semibold py-4 px-6 rounded-lg
        hover:from-blue-700 hover:to-blue-900
        focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
        transform hover:scale-[1.02] active:scale-[0.98]
        transition-all duration-300
        shadow-lg hover:shadow-xl disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-black"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    ),
    [loading]
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Contáctame
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          ¿Tienes alguna pregunta o proyecto en mente? ¡Me encantaría saber de ti!
        </p>
      </div>

      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-20 blur-xl"></div>

        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-700">
          <fieldset className="space-y-6" disabled={loading}>
            <div>
              <Label>Nombre</Label>
              <Input placeholder="Tu nombre" ref={nameRef} required />
            </div>

            <div>
              <Label>Email</Label>
              <Input type="email" placeholder="Tu email" ref={emailRef} required />
            </div>

            <div>
              <Label>Asunto</Label>
              <Input placeholder="Asunto" ref={subjectRef} required />
            </div>

            <div>
              <Label>Mensaje</Label>
              <TextArea rows={6} placeholder="Tu mensaje" ref={messageRef} />
            </div>

            {SubmitButton}

            {success && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium">
                ✅ Mensaje enviado correctamente
              </p>
            )}
          </fieldset>
        </div>
      </div>
    </form>
  );
}
