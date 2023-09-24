import { React, useState } from "react";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      validationErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div className="bg-[#1A1A1A] mt-4 pt-[2rem]">
        <div className="flex justify-evenly flex-wrap mobile:gap-10 text-center  text-[#626262] ">
          <div className="flex flex-col gap-2">
            <ul>
              <li className="text-3xl">Newsletter</li>
              <li>
                Get news about articles and updates<br></br> in your inbox.
              </li>
            </ul>
          </div>

          <div className="news-letter flex flex-col gap-3 w-[40%] mobile:w-[90%] ">
            {isSubmitted ? (
              <p>Thanks For Your Submission</p>
            ) : (
              <form
                className="flex flex-col gap-3 p-2]"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className="bg-transparent ml-2"
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <ul>
                  <li className="hline"></li>
                </ul>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="bg-transparent ml-2"
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <ul>
                  <li className="hline"></li>
                </ul>
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  value={formData.message}
                  onChange={handleChange}
                  autoComplete="message"
                  className="bg-transparent ml-2"
                />
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
                <ul>
                  <li className="hline"></li>
                </ul>
                <div className="bg-transparent flex justify-center items-center">
                  <button
                    type="submit"
                    className="h-16 w-16 bg-transparent border-2 shadow-md border-[#F07E15] text-[#F07E15] flex justify-center items-center rounded-full hover:rotate-12 transition hover:bg-[#626262] cursor-pointer p-[4rem] ml-[20rem]   mobile:p-[3rem] mobile:ml-[10rem] "
                  >
                    SEND
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="text-white footer-text flex justify-between">
          <ul className="text-[5rem] mobile:text-[1.8rem]  mobile:ml-0 footer-end-text-li ml-[12rem]">
            <li>GET</li>
            <li>IN TOUCH</li>
          </ul>
        </div>
      </div>
      <div className="max-w-full bg-[#000000] text-white font-[Poppins] text-sm p-3 mobile:p-0">
        <p className="text-center">Copyright 2022 All Right Reserved By SG</p>
      </div>
    </>
  );
}

export default Footer;
