import { useState, useRef, useMemo } from "react";

function Label(props){
    return(
        <label className="block text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
            {props.children}
        </label>
    );
}

function Input({props, ...rest}){
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

function TextArea({props, ...rest}){
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
    )
}

export default function ContactFrom() {

    const [loading, setLoading] = useState(false);

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }, 2000);
    }

    const SubmitButton = useMemo(() => {
        return (
            <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 
                         text-white font-semibold py-4 px-6 rounded-lg
                         hover:from-blue-700 hover:to-blue-900
                         focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                         transform hover:scale-[1.02] active:scale-[0.98]
                         transition-all duration-300
                         shadow-lg hover:shadow-xl disabled:bg-blue-100 disabled:cursor-not-allowed disabled:text-black" 
                onClick={handleSubmit}
            >
                {loading ? "Sending..." : "Send"}
            </button>
        )
    })

    return (
        <div className="w-full max-w-2xl mx-auto py-12">
            {/* Header */}
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

            {/* Form Card */}
            <div className="relative">
                {/* Blue blur glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl opacity-20 blur-xl"></div>
                
                {/* Form container */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-blue-700">
                    <fieldset className="space-y-6" disabled={loading}>
                        <div>
                            <Label>Name</Label>
                            <Input placeholder="Your Name" ref={nameRef} />
                        </div>
                        
                        <div>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Your Email" ref={emailRef}/>
                        </div>
                        
                        <div>
                            <Label>Message</Label>
                            <TextArea placeholder="Your Message" rows={6} ref={messageRef}/>
                        </div>

                        {SubmitButton}
                    </fieldset>
                </div>
            </div>
        </div>
    );
}
