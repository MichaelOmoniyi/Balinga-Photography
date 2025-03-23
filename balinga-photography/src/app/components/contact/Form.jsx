import React from "react";

const Form = () => {
  return (
    <div className="bg-slate-100 pt-8 pb-8 pl-8 pr-8 md:pr-12 md:pl-12 lg:pl-24 lg:pr-24">
      <div className="form-container bg-white pt-8 pb-8 pr-8 pl-8 md:pr-12 md:pl-12 rounded-md">
        <form action="#" method="POST">
          <label htmlFor="name">Your Name <span className="text-red-600">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your first name e.g Jane"
            required
          />

          <div className="md:flex md:gap-6 md:justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="email">Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="phone">Phone <span className="text-red-600">*</span></label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                required
              />
            </div>
          </div>

          <label htmlFor="job-type">Job Type <span className="text-red-600">*</span></label>
          <select id="job-type" name="job-type" required>
            <option value="" disabled selected>
              Select Job Type
            </option>
            <option value="wedding">Wedding Video Production</option>
            <option value="wedding-photography">Wedding Photography</option>
            <option value="wedding-full-coverage">Wedding Full Coverage</option>
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

          <label htmlFor="event-date">Main Shoot / Event Date <span className="text-red-600">*</span></label>
          <input
            type="date"
            id="event-date"
            name="event-date"
            placeholder="Choose date"
            required
          />

          <div className="md:flex md:gap-6 md:justify-between">
            <div className="w-full flex flex-col">
              <label htmlFor="location">Event / Shoot Location <span className="text-red-600">*</span></label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Enter Main Shoot location"
                required
              />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="referral">How did you hear about us? <span className="text-red-600">*</span></label>
              <select id="referral" name="referral" required>
                <option value="" disabled selected>
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

          <label htmlFor="additional-info">Additional Information</label>
          <textarea
            id="additional-info"
            name="additional-info"
            placeholder="If you have any more information for me kindly drop them here"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
