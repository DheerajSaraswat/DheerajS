import React from "react";
import toast from "react-hot-toast";

function Contact() {
  const formRef = React.createRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Form Submitted Successfully");
      formRef.current.reset();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col space-y-4"
      >
        <label className="block">
          <span className="text-gray-700">Name:</span>
          <input
            type="text"
            name="name"
            className="w-full p-2 pl-5 text-sm text-gray-700"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email:</span>
          <input
            type="email"
            name="email"
            className="w-full p-2 pl-5 text-sm text-gray-700"
            placeholder="your@email.com"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Message:</span>
          <textarea
            name="message"
            className="w-full p-2 pl-5 text-sm text-gray-700 h-40"
            placeholder="Your message"
          />
        </label>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
