

const Footer = () => {
  return (
    <>
      <div id="footer" className="flex text-white/[0.8] border-t-[0.001px] scroll-smooth justify-around p-10 bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900">
        <div>
          <h1>Address: </h1>
          <p className="text-wrap">
            Ramayalam Road Wanaparthy
            <br />
            Telangana
            <br />
            509103
          </p>
        </div>
        <div>
          <h1>Contact: </h1>
          <ul>
            <li className="py-2">
              <a href="#" className="relative group">
                Whatsapp
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="relative group">
                Instagram
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="relative group">
                Facebook
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="relative group">
                E-Mail
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1>Links: </h1>
          <ul>
            <li className="py-2">
              <a href="#" className="relative group">
                Home
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#store" className="relative group">
                Stores
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#Testimonials" className="relative group">
                Testimonials
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
            <li className="py-2">
              <a href="#footer" className="relative group">
                Contact
                <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer