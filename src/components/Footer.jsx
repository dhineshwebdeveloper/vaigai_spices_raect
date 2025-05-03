import React from "react";
import vaigai_logo from "../assets/images/vaigai_spices_logo.jpeg";
const Footer = () => {
  return (
    <footer className="text-slate-100 bg-transparent pt-20">
      <div
        className="w-full h-[500px] flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1440 309\"><defs><linearGradient id=\"gradient-1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:%23CCD5BB;stop-opacity:1\"/><stop offset=\"100%\" style=\"stop-color:%23CCD5BB;stop-opacity:0.7\"/></linearGradient><linearGradient id=\"gradient-2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:%23CCD5BB;stop-opacity:0.7\"/><stop offset=\"100%\" style=\"stop-color:%23CCD5BB;stop-opacity:0.5\"/></linearGradient><linearGradient id=\"gradient-3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:%23CCD5BB;stop-opacity:0.5\"/><stop offset=\"100%\" style=\"stop-color:%23CCD5BB;stop-opacity:0.3\"/></linearGradient></defs><g clip-path=\"url(%23clip0_365_247)\"><path d=\"M0 34.6293L34.4 42.3543C68.8 50.2125 137.6 65.6625 206.08 75.2522C274.72 84.8418 342.88 88.3047 411.52 80.3134C480 72.322 548.8 52.8763 617.28 33.697C685.92 14.6509 754.08 -3.99567 822.72 1.33191C891.2 6.6595 960 35.9612 1028.48 43.6862C1097.12 51.5444 1165.28 37.6927 1233.92 42.2211C1302.4 46.6164 1371.2 69.2586 1405.6 80.5798L1440 91.9009V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V34.6293Z\" fill=\"url(%23gradient-1)\"/><path d=\"M0 125.198L34.4 118.272C68.8 111.48 137.6 97.628 206.08 89.6366C274.72 81.6452 342.88 79.5142 411.52 87.9052C480 96.2961 548.8 115.475 617.28 124.932C685.92 134.522 754.08 134.522 822.72 120.936C891.2 107.484 960 80.3134 1028.48 68.1931C1097.12 55.9397 1165.28 58.6034 1233.92 68.9922C1302.4 79.5142 1371.2 97.628 1405.6 106.818L1440 115.875V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V125.198Z\" fill=\"url(%23gradient-2)\"/><path d=\"M0 191.793L34.4 198.186C68.8 204.712 137.6 217.499 206.08 211.106C274.72 204.712 342.88 178.874 411.52 174.745C480 170.483 548.8 187.797 617.28 192.459C685.92 197.121 754.08 189.129 822.72 181.138C891.2 173.147 960 165.155 1028.48 172.747C1097.12 180.206 1165.28 203.381 1233.92 203.514C1302.4 203.78 1371.2 181.138 1405.6 169.817L1440 158.496V309H1405.6C1371.2 309 1302.4 309 1233.92 309C1165.28 309 1097.12 309 1028.48 309C960 309 891.2 309 822.72 309C754.08 309 685.92 309 617.28 309C548.8 309 480 309 411.52 309C342.88 309 274.72 309 206.08 309C137.6 309 68.8 309 34.4 309H0V191.793Z\" fill=\"url(%23gradient-3)\"/></g><defs><clipPath id=\"clip0_365_247\"><rect width=\"1440\" height=\"309\" fill=\"white\"/></clipPath></defs></svg>')",
        }}
      >
        <div className="max-w-6xl w-full px-4 flex flex-wrap justify-between gap-6">
          <div className="min-w-[220px]">
            <img
              className="mt-20 rounded-full"
              src={vaigai_logo}
              alt="vaigai spices logo"
              width={200}
              height={200}

            />
          </div>

          <div className="min-w-[220px] ml-12 md:ml-0">
            <h4 className="text-yellow-400 text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Gallery", "/gallery"],
                ["Rice mundy", "/ricemundy"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
                ["Offers", "/offers"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={`https://tppgeneralstores.com${link}`}
                    className="hover:text-yellow-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[220px]">
            <h4 className="text-yellow-400 text-xl mb-4">Contact Us</h4>
            <h6 className="text-white">TPP GENERAL STORES</h6>
            <p className="leading-relaxed">
              NANGAVALLI MAIN ROAD,
              <br />
              OPP TO POOJA CLINIC,
              <br />
              THARAMANGALAM, OMALUR TALUK, SALEM
            </p>
            <div className="flex gap-2 items-start mt-4">
              <p className="font-semibold">Phone:</p>
              <div>
                <p>+91 9840605676</p>
                <p>+91 9994595899</p>
              </div>
            </div>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:santhoshmba83@gmail.com" className="text-white">
                santhoshmba83@gmail.com
              </a>
            </p>
          </div>

          <div className="min-w-[220px]">
            <h4 className="text-yellow-400 text-xl mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6"
                >
                  <path
                    fill="#0765ff"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256..."
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6"
                >
                  <path fill="#c62a8d" d="M224.1 141c-63.6 0-114.9 51.3..." />
                </svg>
              </a>
            </div>
          </div>
        </div>
       
      </div>
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-600 pt-6">
        &copy; {new Date().getFullYear()} TPP GENERAL STORES. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
