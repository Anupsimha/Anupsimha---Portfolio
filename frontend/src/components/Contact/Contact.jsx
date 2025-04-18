import React, { useState } from 'react';
import { FaPaperPlane, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import toast from 'react-hot-toast';
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!form.name) newErrors.name = "Full Name is required!";
    if (!form.email) newErrors.email = "E-mail is required!";
    if (!form.subject) newErrors.subject = "Subject is required!";
    if (!form.message) newErrors.message = "Message is required!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true); // Start loader

    try {
      const res = await axios.post("http://localhost:3000/api/contact/send-message", {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      if (res.data.success) {
        toast.success("Message sent successfully!");
        resetForm();
      } else {
        alert("⚠️ " + res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.status === 429) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong. Please try again later.");
        console.error(error);
      }
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <div className='w-full h-screen -mt-11 flex flex-col justify-center items-start'>
      <div className='relative left-6 top-20 w-[97.5%]'>
        <p className='text-3xl font-semibold'>
          <span className='text-[#E79600]'>Reach</span> Out
        </p>
        <div className="relative top-1 right-0 w-14 h-0.5 bg-white rounded-b-lg"></div>
        <div className='flex flex-col items-center justify-center mt-12'>
          {/* Form Section */}
          <div className='w-[75%] bg-purple-700 p-6 rounded-2xl shadow-md'>
            <form onSubmit={handleSubmit} className='space-y-4 text-white'>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className='w-full sm:w-1/2'>
                  <input
                    type="text"
                    name="name"
                    placeholder='Full Name'
                    value={form.name}
                    onChange={handleChange}
                    className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                  />
                  {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className='w-full sm:w-1/2'>
                  <input
                    type="email"
                    name="email"
                    placeholder='E-mail'
                    value={form.email}
                    onChange={handleChange}
                    className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                  />
                  {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder='Subject'
                  value={form.subject}
                  onChange={handleChange}
                  className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                />
                {errors.subject && <p className="text-red-300 text-sm mt-1">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder='Your Message'
                  value={form.message}
                  onChange={handleChange}
                  className='w-full p-3 rounded-md bg-purple-800 border border-purple-500 placeholder-white'
                ></textarea>
                {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Loader or Submit button */}
              <div className='flex justify-end'>
                {loading ? (
                  <button
                    disabled
                    className='flex items-center gap-2 bg-gray-500 text-white px-5 py-2 rounded-md shadow-lg font-semibold animate-pulse'
                  >
                    Sending...
                  </button>
                ) : (
                  <button
                    type='submit'
                    className='flex items-center gap-2 bg-[#E79600] hover:bg-yellow-500 text-black px-5 py-2 rounded-md shadow-lg font-semibold'
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Social Links Section */}
          <div className='w-[75%] mt-8 text-white text-lg flex flex-col sm:flex-row sm:items-center gap-4'>
            <p className='text-2xl'>
              or <span className='text-[#E79600]'>contact me</span> with...
            </p>
            <div className='flex gap-8 text-2xl'>
              <a href="https://x.com/AnupSimha4288" target="_blank" aria-label="Twitter" rel="noopener noreferrer"><FaSquareXTwitter size={40} className='text-black hover:scale-110 transition-transform' /></a>
              <a href="https://www.linkedin.com/in/anupsimha/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer"><FaLinkedin size={40} className='text-[#0A66C2] bg-white hover:scale-110 transition-transform' /></a>
              <a href="https://github.com/Anupsimha" target="_blank" aria-label="GitHub" rel="noopener noreferrer"><FaGithub size={40} className='bg-black rounded-full hover:scale-110 transition-transform' /></a>
              <a href="https://www.facebook.com/profile.php?id=61561064066138&sk=about" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebook size={40} className='text-[#0A66C2] bg-white rounded-full hover:scale-110 transition-transform' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
