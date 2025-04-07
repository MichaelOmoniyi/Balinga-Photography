"use client";
import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import useZoomEffect from "@/app/Hooks/useZoomEffect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  useZoomEffect(".transitionEffect");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jobType: "",
    eventDate: "",
    location: "",
    referral: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setLoading(false);
        setStatus(true);
        setMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          jobType: "",
          eventDate: "",
          location: "",
          referral: "",
          additionalInfo: "",
        });
      }
    } catch (error) {
      setLoading(false);
      setStatus(false);
      setMessage("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }

    setTimeout(() => {
      setStatus(null);
      setMessage("");
    }, 5000);
  };

  return (
    <div className="py-8">
      <div className="form-container bg-white shadow-2xl py-8 px-8 md:px-12 rounded-md">
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div className="transitionEffect scale-110 opacity-0">
            <label htmlFor="name">
              Your Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter your first name e.g Jane"
              onChange={handleChange}
              required
            />
          </div>

          <div className="md:flex md:gap-6 md:justify-between">
            <div className="transitionEffect scale-110 opacity-0 w-full flex flex-col">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="transitionEffect scale-110 opacity-0 w-full flex flex-col">
              <label htmlFor="phone">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Enter your phone"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="transitionEffect scale-110 opacity-0">
            <label htmlFor="job-type">
              Job Type <span className="text-red-600">*</span>
            </label>
            <select
              id="job-type"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
              className="appearance-none"
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="wedding">Wedding Video Production</option>
              <option value="wedding-photography">Wedding Photography</option>
              <option value="wedding-full-coverage">
                Wedding Full Coverage
              </option>
              <option value="headshot">Headshots</option>
              <option value="video-production">Video Production (DOP)</option>
              <option value="pre-wedding">Pre-wedding Shoot</option>
              <option value="proposal">Proposal Shoot</option>
              <option value="photo-session">
                Photo Session (eg. Album cover, Birthday Shoot)
              </option>
              <option value="commercial-advert">Comercial/Advertising</option>
              <option value="event">Event</option>
              <option value="family">Family Portrait</option>
              <option value="real-estate">Real Estate and Architecture</option>
              <option value="maternity">Maternity</option>
              <option value="newborn">Newborn</option>
              <option value="graduation">Graduation Photo or Video</option>
            </select>
          </div>

          <div className="transitionEffect scale-110 opacity-0">
            <label htmlFor="event-date">
              Main Shoot / Event Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              id="event-date"
              name="eventDate"
              value={formData.eventDate}
              placeholder="Choose date"
              onChange={handleChange}
              required
            />
            {/* <DatePicker
              selected={formData.eventDate}
              name="eventDate"
              onChange={handleChange}
              className="relative w-full border border-solid border-gray-600 rounded-md px-4 py-2 mb-2 text-gray-600 bg-slate-50 transition-all  focus:outline-none focus:border-2 focus:border-gray-800 z-50"
              dateFormat="dd-MM-yyyy"
              placeholderText="Select Date"
            /> */}
          </div>

          <div className="md:flex md:gap-6 md:justify-between">
            <div className="transitionEffect scale-110 opacity-0 w-full flex flex-col">
              <label htmlFor="location">
                Event / Shoot Location <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                placeholder="Enter Main Shoot location"
                onChange={handleChange}
                required
              />
            </div>

            <div className="transitionEffect scale-110 opacity-0 w-full flex flex-col">
              <label htmlFor="referral">
                How did you hear about us?{" "}
                <span className="text-red-600">*</span>
              </label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                required
                className="appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'black\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><path d=\'M6 9l6 6 6-6\'/></svg>')] bg-no-repeat bg-right bg-[length:16px] cursor-pointer"
              >
                <option value="" disabled>
                  Choose your option
                </option>
                <option value="social-media">Social Media</option>
                <option value="friend">Word of Mouth</option>
                <option value="website">Google</option>
                <option value="event">Event</option>
                <option value="referral">Referral</option>
              </select>
            </div>
          </div>

          <div className="transitionEffect scale-110 opacity-0">
            <label htmlFor="additional-info">Additional Information</label>
            <textarea
              id="additional-info"
              name="additionalInfo"
              value={formData.additionalInfo}
              placeholder="If you have any more information for me kindly drop them here"
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            className="transitionEffect scale-110 opacity-0"
            type="submit"
          >
            Submit
          </button>
          {loading ? (
            <div className="w-full">
              <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
            </div>
          ) : null}
          {message.length > 0 ? (
            <div
              className={`text-left ${
                status === true ? "text-green-500" : "text-red-500"
              }`}
            >
              {message}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Form;
