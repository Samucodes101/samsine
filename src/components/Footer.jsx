import Logo from '../assets/edsine_logo.png';


export default function Footer() {
  return (
    <footer class="bg-slate-900 text-white py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <div>
      <img src={Logo} alt="Logo" className="w-28 ml-12" />
      </div>
      <p class="text-gray-400 mt-4 ml-11">
      Making organizations thrive in a fast-evolving digital landscape by providing cutting-edge tools and expert guidance.      </p>
      <div class="flex space-x-3 mt-4">
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-facebook"></i> 
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-twitter"></i> 
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-pinterest"></i> 
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>

    <div>
      <h2 class="text-lg font-semibold mb-4">IT Services</h2>
      <ul class="space-y-2 text-gray-400">
        <li><a href="#" class="hover:text-white">Software Development</a></li>
        <li><a href="#" class="hover:text-white">Web Development</a></li>
        <li><a href="#" class="hover:text-white">Analytic Solutions</a></li>
        <li><a href="#" class="hover:text-white">Cloud and DevOps</a></li>
        <li><a href="#" class="hover:text-white">Product Design</a></li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold mb-4">Contact Info</h2>
      <ul class="space-y-2 text-gray-400">
        <li>3 R. A. Adeleye Cl.</li>
        <li>(+234)908 899 1180</li>
        <li>info@edsinetechnologiesltd.com</li>
        <li>Opening Hours: 8:30 - 18:00</li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold mb-4">Newsletter</h2>
      <p class="text-gray-400 mb-4">
      Join our newsletter to stay up-to-date with news, offers, and trends..
      </p>
      <form class="flex">
        <input
          type="email"
          placeholder="Your email address"
          class="flex-1 px-4 py-2 text-black rounded-l-md focus:outline-none"
        />
        <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md text-white">
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>

  
  <div class="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
    © 2022 All Rights Reserved. Design & Developed by Edsine Dev Team
  </div>
</footer>

  );
}
