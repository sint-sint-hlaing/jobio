import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Slider from "react-slick";

const faq = [
  {
    question: "What is the hiring process like?",
    answer:
      "The hiring process can vary depending on the company and the specific role you are applying for. Generally, the process involves submitting a job application, possibly completing a skills assessment or taking a aptitude test, and then participating in one or more interviews. You may also be required to provide references or participate in a background check. It's a good idea to research the company and the job requirements beforehand to be prepared for the hiring process.",
  },
  {
    question: "How do I write a good resume?",
    answer:
      "A good resume is clear, concise, and highlights your relevant skills and experience. It should be tailored to the specific job you are applying for and should not be too long (one or two pages is generally sufficient). Your resume should include your contact information, work experience, education, and any relevant skills or achievements. It's a good idea to use action verbs and specific examples to demonstrate your abilities. You should also proofread your resume carefully to ensure that it is error-free.",
  },
  {
    question: "What should I wear to a job interview?",
    answer:
      "It's important to dress professionally for a job interview, as your appearance can make a strong first impression. For men, this usually means wearing a suit and tie. For women, a suit or professional dress is appropriate. Avoid wearing too much jewelry or perfume, and make sure your clothes are clean and pressed. It's also a good idea to research the company's dress code and try to match the level of formality in your attire.",
  },
  {
    question: "How do I negotiate a salary?",
    answer:
      "Negotiating a salary can be intimidating, but it's important to remember that you have value and are worth being paid fairly for your work. When negotiating a salary, it's a good idea to research the market rate for similar roles in your area and to be prepared to justify your request. It's also a good idea to consider other factors, such as benefits, vacation time, and opportunities for advancement, in addition to salary. It's okay to ask for what you want, but be prepared to compromise and be respectful in your negotiation.",
  },
  {
    question: "What are some common job interview questions?",
    answer:
      "Some common job interview questions include: 'Tell me about yourself', 'Why do you want to work for our company?', 'What are your strengths and weaknesses?', 'Where do you see yourself in five years?', and 'Why should we hire you?'. It's a good idea to prepare answers to these questions beforehand and to practice with a friend or mentor. Be honest and authentic in your responses, and try to highlight your relevant skills and experience.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className=" w-5/6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-10">
      <div className="w-full lg:w-2/3">
        <h1 className=" text-2xl flex flex-col">Frequently Asked Questions</h1>
        <div className=" w-full my-5 grid grid-cols-1">
          {faq?.map((data, index) => (
            <div key={index} className="flex gap-3 flex-col">
              <div
                className=" bg-gray-200 flex flex-row justify-between py-2 px-5 rounded-md "
                onClick={() => toggle(index)}
              >
                <p>{data.question}</p>
                <IoIosArrowDown
                  size="20"
                  className={
                    selected === index
                      ? "rotate-180 duration-300 ease-in  text-green-600"
                      : "rotate-0 duration-300 ease-in"
                  }
                />
              </div>
              <div
                className={
                  selected === index
                    ? "dropdown show text-gray-500 text-sm mb-2 px-5"
                    : "dropdown text-gray-500 text-sm mb-2 px-5"
                }
              >
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 flex flex-col ">
        <h1 className=" text-2xl flex flex-col">What People Say</h1>
        <Slider {...settings}>
          {[1, 2, 3].map((data) => (
            <div className=" flex flex-col items-center w-full pt-10 pb-5 gap-3">
              <img
                src="https://img.freepik.com/free-photo/beautiful-model-girl-with-perfect-fresh-clean-skin-youth-skin-care-concept-isolated-pastel-brown-background_658552-32.jpg?size=626&ext=jpg&ga=GA1.2.755197081.1668255134&semt=sph"
                alt=""
                className=" w-20 h-20 rounded-full object-cover mx-auto mb-3"
              />
              <h3 className=" text-center text-xl ">Augesta Silva</h3>
              <h4 className="text-center text-gray-500 mb-2">Web Designer</h4>
              <p className=" text-center text-grey-500">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Faq;
