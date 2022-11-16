import React from 'react';
import { contacts } from '../constants';

const Contact = () => {
  return (
    <div className="flex">
      <div className="flex-1 mr-3">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {contacts.map((form, index) => (
            <div className="mb-4" key={form.id}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={form.label.toLowerCase()}
              >
                {form.label}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={form.label.toLowerCase()}
                type="text"
                placeholder={form.placeholder}
              />
            </div>
          ))}
          <div className="flex items-center justify-between">
            <button
              className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60529.95756927359!2d73.91000101812897!3d18.523372478506264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c7d489ec73%3A0xed59d82057d98116!2sBugendaiTech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1668568137279!5m2!1sen!2sin"
          width="600"
          height="425"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
