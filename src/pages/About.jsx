export default function About() {
    return (
      <section className="w-full bg-white font-sans antialiased">
  
  <div className="bg-[#111111] px-6 py-20 md:py-32 flex flex-col items-center text-center">
    <div className="max-w-3xl">
      <h2 className="text-white text-3xl md:text-5xl font-medium leading-tight mb-8">
        It's not about the tool being used, but about the designer using the tool.
      </h2>
      <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
        You've probably heard this popular phrase, but I'd argue it's about the balance between a designer and their tools.
      </p>
    </div>
  </div>

  <div className="max-w-6xl mx-auto px-6 py-20">
    
    <div className="mb-12">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-4">
        My Brand Archetype would be...
      </span>
      <h3 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight">
        Sometimes, a <span class="text-[#10b981]">Rebel</span>, often, an <br />
        <span className="text-[#10b981]">Explorer</span>, but always a <span class="text-[#10b981]">Caregiver</span>.
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      
      <div className="bg-[#f3f4f3] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between">
        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>
            I excel by finding new ways to make stuff work. This has always been my MO for my career, 
            school, and life in general. I always try to live between construction and the general.
          </p>
          <p>
            I'm drawn to storytelling through words, visuals, and between those lines, 
            I work with people to show them they make people.
          </p>
        </div>

        <div className="mt-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#1a1a1a] block mb-4">I Love...</span>
          <div className="flex flex-wrap gap-2">
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Books</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Black & White</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Photography</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Art</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Nature</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Mentoring</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Music</span>
            <span className="bg-white px-4 py-2 rounded-lg text-xs font-semibold shadow-sm">Poetry</span>
          </div>
        </div>
      </div>

      <div className="relative group h-[500px] md:h-auto">
        <img 
          src="jude4.png" 
          alt="cutie" 
          className="w-full h-full object-cover rounded-[2.5rem]"
        />
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md p-2 rounded-2xl flex items-center gap-4 shadow-xl border border-white/20">
          <div className="bg-[#10b981] p-2 rounded-xl text-white">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" stroke-width="2"/></svg>
          </div>
          <button className="p-2 text-gray-500 hover:text-[#10b981]"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke-width="2"/><circle cx="12" cy="13" r="3" stroke-width="2"/></svg></button>
          <button className="p-2 text-gray-500 hover:text-[#10b981]"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" stroke-width="2"/></svg></button>
          <button className="p-2 text-gray-500 hover:text-[#10b981]"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-width="2"/></svg></button>
        </div>
      </div>
    </div>

    <div className="bg-[#f3f4f3] rounded-[2.5rem] p-10 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="flex items-start gap-4">
          <div className="bg-[#10b981] p-3 rounded-full text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke-width="2"/></svg>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Currently watching...</p>
            <a href="#" class="text-[#10b981] font-bold flex items-center gap-1 hover:underline">
              Stranger Things S05 <span class="text-xs">↗</span>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#10b981] p-3 rounded-full text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke-width="2"/></svg>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Currently reading...</p>
            <a href="#" class="text-[#10b981] font-bold flex items-center gap-1 hover:underline">
              When Sorry Isn't Enough <span class="text-xs">↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
    )
}