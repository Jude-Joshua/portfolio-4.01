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


					<div className="archetype-body-info-left-label flex flex-col items-start justify-start">
						<p className="t-highlights">INTERESTS</p>
						<div className="archetype-body-info-left-label-list flex flex-row flex-wrap items-start justify-start">
							{[
								"Books",
								"Photography",
								"Poetry",
								"Art",
								"Music",
								"Nature",
								"Mentoring",
								"Black & White",
							].map((item) => (
								<span
									key={item}
									className="archetype-body-info-left-label-list-item t-copy-small"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>


			</div>
		</section>
	)
}