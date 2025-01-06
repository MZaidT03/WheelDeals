import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <h1 className="font-black text-3xl">WheelsDeal</h1>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-[#006A67] hover:shadow-md"
                href="#"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-[#006A67] hover:shadow-md"
                href="#"
              >
                {" "}
                Services{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-[#006A67] hover:shadow-md"
                href="#"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-[#006A67] hover:shadow-md"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right font-bold">
          Copyright &copy; 2020. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
