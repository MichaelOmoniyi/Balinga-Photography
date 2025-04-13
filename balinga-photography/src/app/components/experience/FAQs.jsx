"use client";
import React, { useState, useEffect } from "react";
import useZoomEffect from "@/app/Hooks/useZoomEffect";

const FAQs = () => {
  useZoomEffect(".transitionEffect");

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a session?",
      answer: (
        <>
          Booking is simple! Fill out the contact form, and I’ll get back to you
          within a few hours to discuss the details.{" "}
          <span className="font-bold">A deposit</span> is required to secure
          your date.
        </>
      ),
    },
    {
      question: "What’s included in my photography package?",
      answer: (
        <>
          <p>Each package is tailored to your needs but generally includes:</p>
          <ul>
            <li>A pre-session consultation</li>
            <li>High-resolution, professionally edited images</li>
            <li>An online gallery for easy access and sharing</li>
            <li>Optional add-ons like prints or albums</li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does it take to receive my photos?",
      answer:
        "For portraits and headshots, expect delivery within 7–10 days. For weddings and events, the turnaround time is 4–6 weeks.",
    },
    {
      question: "Can I request specific shots or styles?",
      answer:
        "Absolutely! During our consultation, we’ll go over your vision, preferred style, and any must-have shots.",
    },
    {
      question: "Do you travel for shoots?",
      answer:
        "Yes! I love capturing moments in new locations. Travel fees may apply for destinations outside my main coverage area.",
    },
    {
      question: "What should I wear for my session?",
      answer:
        "It depends on the vibe you’re going for! I always recommend neutral tones, classic styles, and outfits that make you feel confident and comfortable. If you need help, I can guide you through outfit choices.",
    },
    {
      question: "What happens if it rains or I need to reschedule?",
      answer: (
        <p>
          Life happens! For outdoor sessions, we’ll monitor the weather and
          reschedule if needed. If you need to reschedule for personal reasons,
          just let me know at least{" "}
          <span className="font-bold">48 hours in advance.</span>
        </p>
      ),
    },
    {
      question: "Can I bring someone with me to my shoot?",
      answer:
        "Of course! Whether it’s a friend, family member, or partner, having someone there can help you feel more relaxed.",
    },
    {
      question: "Do you offer prints or albums?",
      answer:
        "Yes! You can order professional-quality prints, canvases, and albums directly through your online gallery.",
    },
    {
      question: "What if I’m not comfortable in front of the camera?",
      answer:
        "That’s totally normal! My goal is to create a fun and relaxed experience. I’ll guide you through poses and prompts to make sure you look and feel your best.",
    },
  ];

  return (
    <section className="section_ w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="transitionEffect text-xl font-mono font-bold text-gray-900 dark:text-white scale-110 opacity-0">
            FAQ
          </h2>
        </div>
        <div className="transitionEffect grid grid-cols-1 md:grid-cols-2 gap-6 scale-110 opacity-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-300 p-4 rounded-xl transition duration-500 ${
                openIndex === index
                  ? "bg-indigo-50 border-gray-500 dark:border-gray-100"
                  : ""
              }`}
            >
              <button
                className={`flex justify-between items-center w-full text-lg font-medium ${
                  openIndex === index
                    ? "text-gray-600"
                    : "dark:text-white text-gray-600"
                }`}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <svg
                    className="w-6 h-6 dark:text-gray-600 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-gray-900 dark:text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
              {openIndex === index && (
                <div
                  className={`mt-2 ${
                    openIndex === index
                      ? "text-gray-600"
                      : "dark:text-white text-gray-600"
                  }`}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
