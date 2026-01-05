import React from 'react';

const Archives = () => {
    return (
        // Archives
      <section className="w-full bg-white font-sans antialiased py-20 px-4 md:px-8">
  <div className="max-w-7xl mx-auto">
    
    <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Work Archives.</h2>

    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-15">
  
  <div class="bg-gray-100 rounded-3xl h-[420px] flex items-end p-4">
    <p class="bg-white rounded-xl px-4 py-3 text-sm text-gray-800 leading-relaxed">
      Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
    </p>
  </div>

  <div class="bg-gray-100 rounded-3xl h-[420px] flex items-end p-4">
    <p class="bg-white rounded-xl px-4 py-3 text-sm text-gray-800 leading-relaxed ">
      Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
    </p>
  </div>

</div>


    <div className="border-t border-gray-200 mb-32">
      <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-gray-200 hover:bg-gray-50/50 px-2 transition-colors cursor-pointer">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl font-bold text-black">Project Name</h4>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 text-sm md:text-base">
            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-2xl text-gray-300 group-hover:text-black group-hover:translate-x-2 transition-all duration-300">→</span>
        </div>
      </div>

      <div className="group flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-gray-200 hover:bg-gray-50/50 px-2 transition-colors cursor-pointer">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h4 className="text-xl font-bold text-black">Project Name</h4>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-500 text-sm md:text-base">
            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-2xl text-gray-300 group-hover:text-black group-hover:translate-x-2 transition-all duration-300">→</span>
        </div>
      </div>
    </div>

    <div className="bg-[#0f1010] rounded-[2.5rem] overflow-hidden">
      <div className="bg-[#00d369] py-6 px-8 flex items-center justify-between overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-4">
          <span className="text-2xl">✦</span>
          <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-black">
            LET'S BUILD SOMETHING
          </h3>
        </div>
        <span className="text-2xl hidden md:block">✦</span>
      </div>

      <div className="p-8 md:p-16 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Get exposed the right way. While AI calls it "no fluff", I call it "brilliance". 
            Identity is critical for your product (or you), and you don't want to miss out by going for something mediocre.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm font-bold text-white">
          <a href="#" className="group flex items-center gap-2 hover:text-[#00d369] transition-colors">
            Talk Project Collaborations <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#" className="group flex items-center gap-2 hover:text-[#00d369] transition-colors">
            Discuss Mentorship <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <div className="px-8 md:px-16 pb-12 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 mt-4">
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 md:mb-0">
          © Jude Joshua, 2025. All rights reserved.
        </p>
        <div class="flex gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white">Linkedin</a>
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </div>

  </div>
</section>

   
    );
}

export default Archives;