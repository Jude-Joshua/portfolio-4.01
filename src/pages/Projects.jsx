export default function Projects() {
    return (
        // Projects
      <section className="w-full bg-white py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Work</h2>
      <p className="text-gray-500 text-sm">Branding and Website design projects from 2024 til date.</p>
    </div>

    <div className="border-t border-gray-200">
      <a href="#" class="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-xl font-bold text-gray-900">Project Name</h4>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-2xl text-gray-400 group-hover:text-gray-900 transition-transform group-hover:translate-x-2 inline-block">→</span>
        </div>
      </a>

      <a href="#" className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-gray-200 transition-colors hover:bg-gray-50/50">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-xl font-bold text-gray-900">Project Name</h4>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Designing a unified B2B and B2C web app for healthcare providers and seekers in need of a streamlined access to online medical supplies.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-2xl text-gray-400 group-hover:text-gray-900 transition-transform group-hover:translate-x-2 inline-block">→</span>
        </div>
      </a>
      
      </div>
  </div>
</section>

    )
}