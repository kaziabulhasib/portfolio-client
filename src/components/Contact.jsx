import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_noi368q", "template_846fcf7", form.current, {
        publicKey: "7opbvWZP3oa6JB4Lm",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          toast.success("Your Message is sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
        }
      );
  };
  return (
    // to do: This section needs reconsider
    <div id='contact'>
      <SectionTitle title='Contact Me' text='Get in touch'></SectionTitle>
      {/* contact */}
      <section>
        <div className='container lg:px-48 px-6 py-12 mx-auto'>
          <div className='flex lg:flex-row flex-col lg:items-stretch lg:-mx-6'>
            {/* First child section */}
            <div className='w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 flex flex-col justify-center items-center '>
              <h1 className='text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl'>
                Contact for more info
              </h1>

              <div className='mt-6 space-y-8 md:mt-8'>
                <p className='flex items-center -mx-2'>
                  <IoLocationOutline className='text-blue-700 text-xl' />
                  <span className='mx-2 text-gray-700 truncate w-72 dark:text-gray-400'>
                    Burdwan,WB-713104
                  </span>
                </p>

                <p className='flex items-center -mx-2'>
                  <IoCallOutline className='text-blue-700 text-xl' />
                  <span className='mx-2 text-gray-700 truncate w-72 dark:text-gray-400'>
                    +91 7031694396
                  </span>
                </p>

                <p className='flex items-center -mx-2'>
                  <FaEnvelope className='text-blue-700 text-xl' />
                  <span className='mx-2 text-gray-700 truncate w-72 dark:text-gray-400'>
                    hasibkazi420@gmail.com
                  </span>
                </p>
              </div>
              <div className='mt-6 w-80 md:mt-8'>
                <h3 className='text-gray-600 dark:text-gray-300'>Follow Me</h3>

                <div className='flex mt-12 -mx-1.5'>
                  <Link
                    to='https://github.com/kaziabulhasib'
                    className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    aria-label='Github'>
                    <FaGithub className='text-2xl' />
                  </Link>

                  <Link
                    to='https://www.linkedin.com/in/kazi-md-abul-hasib-0357b1241/'
                    className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    aria-label='Linkedin'>
                    <FaLinkedinIn className='text-2xl' />
                  </Link>
                  <Link
                    to='https://www.facebook.com/profile.php?id=100075689694652'
                    className='mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
                    aria-label='Facebook'>
                    <FaFacebook className='text-2xl' />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second child section */}
            <div className='mt-8 lg:mt-0 lg:w-1/2 lg:mx-6 flex flex-col'>
              <div className='w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50 flex flex-col'>
                <h1 className='text-lg font-medium text-gray-700 dark:text-gray-300 text-center'>
                  What do you want to ask
                </h1>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className='mt-6 flex flex-col flex-grow'>
                  <div className='flex-1'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='user_name'
                      placeholder='John Doe'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='flex-1 mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Email address
                    </label>
                    <input
                      type='email'
                      name='user_email'
                      placeholder='johndoe@example.com'
                      className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                  </div>

                  <div className='w-full mt-6'>
                    <label className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
                      Message
                    </label>
                    <textarea
                      name='message'
                      className='block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      placeholder='Message'></textarea>
                  </div>

                  <button className='w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 dark:bg-slate-200 dark:hover:bg-slate-100 dark:text-gray-900'>
                    get in touch
                  </button>
                  <Toaster />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
