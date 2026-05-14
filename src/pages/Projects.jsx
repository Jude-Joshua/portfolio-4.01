import { useMemo, useState } from "react";

import { ArchiveIcon, ArrowUpRightIcon } from "@phosphor-icons/react";

import { projects } from "../components/ProjectCard/ProjectList.jsx";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";

import Animark from '../assets/images/animark.svg?react';
import ArchetypeImage from '../assets/images/bio.svg?react';
import Url from "../components/Links/Link.jsx";

const CATEGORY_FILTERS = [
	{ key: "all", label: "All", tags: null },
	{ key: "design", label: "UI/UX", tags: ["ui/ux", "website redesign"] },
	{ key: "branding", label: "Branding", tags: ["branding"] },
];

const normalizeTag = (tag) => (tag || "").trim().toLowerCase();

const BARS = 10;

export default function Projects() {
	const [query, setQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");

	const categoryCounts = useMemo(() => {
		return CATEGORY_FILTERS.reduce((counts, filter) => {
			if (filter.key === "all") {
				counts[filter.key] = projects.length;
				return counts;
			}

			const normalizedFilterTags = filter.tags.map(normalizeTag);
			counts[filter.key] = projects.filter((project) =>
				normalizedFilterTags.includes(normalizeTag(project.tag))
			).length;
			return counts;
		}, {});
	}, []);

	const filteredProjects = useMemo(() => {
		const normalizedQuery = query.trim().toLowerCase();
		const categoryFilter = CATEGORY_FILTERS.find((filter) => filter.key === activeCategory);
		const normalizedTags = categoryFilter?.tags?.map(normalizeTag) ?? [];

		return projects.filter((project) => {
			const projectTag = normalizeTag(project.tag);
			const matchesCategory =
				activeCategory === "all" || normalizedTags.includes(projectTag);

			const matchesQuery =
				!normalizedQuery ||
				[project.title, project.tag, project.hmw]
					.join(" ")
					.toLowerCase()
					.includes(normalizedQuery);

			return matchesCategory && matchesQuery;
		});
	}, [query, activeCategory]);

	const visibleProjects = filteredProjects.slice(0, 2);
	const listProjects = filteredProjects.slice(2);

	return (
		<main className={'flex flex-col items-start justify-start'}>
			<section className="project flex flex-col justify-start items-start">
				<article className="project-title flex flex-col">
					<h2 className="h2 fade-section fade-section--delay-1">Work Archives.</h2>
					<p className="t-copy fade-section fade-section--delay-2">Branding and Website design projects from 2022 till date.</p>
				</article>

				<article className="project-projects flex flex-col justify-start items-start">
					<div className="project-projects-filters flex flex-row justify-between items-center">
						<div className="project-projects-filters-tags fade-section fade-section--delay-2 flex flex-row">
							{CATEGORY_FILTERS.map((filter) => (
								<span
									key={filter.key}
									className={`project-projects-filters-tags-tag ${activeCategory === filter.key
										? "active"
										: "in-active"
										}`}
									onClick={() => setActiveCategory(filter.key)}
								>
									{filter.label} ({categoryCounts[filter.key]})
								</span>
							))}
						</div>

						<p className="t-copy-small fade-section fade-section--delay-2 project-projects-count flex flex-row justify-center items-center">
							<ArchiveIcon size={'32'} weight="light" />
							{projects.length} project{projects.length === 1 ? "" : "s"} available
						</p>
					</div>

					{filteredProjects.length === 0 ? (
						<div className="project-projects-no rounded-3xl t-copy w-full border border-dashed border-gray-300 bg-gray-50 px-8 py-16 text-center text-lg text-gray-600">
							No projects found for that search and filter combination.
						</div>
					) : (
						<div className="project-projects-holder flex flex-col w-full">
							<div className="project-grid grid grid-cols-2">
								{visibleProjects.map((project, index) => {

									const delayClass = `fade-section fade-section--delay-${(index % 3) + 1}`;

									return (
										<ProjectCard
											variant="grid"
											theme={''}
											project={project}
											key={index}
											className={`fade-section ${delayClass}`}
										/>
									);
								})}
							</div>
							{listProjects.length > 0 && (
								<div className="project-list">
									<div className="project-list-container flex flex-col justfiy-start items-start">
										{listProjects.map((project, index) => (
											<ProjectCard
												variant="list"
												theme={''}
												project={project}
												key={index}
											/>
										))}
									</div>
								</div>
							)}
							<article className="philosophy flex flex-row justify-start items-start">
								<div className="philosophy-title-card fade-section fade-section--delay-1 flex flex-col items-start justify-start">
									<div className="philosophy-title-card-glass flex flex-row items-center justify-center">
										<Animark />
										<div className="philosophy-title-card-glass-rect flex flex-row items-center justify-center">
											{Array.from({ length: BARS }).map((_, i) => (
												<div key={i} className="philosophy-title-card-glass-rect-bar" />
											))}
										</div>
									</div>
									<div className="philosophy-title-card-content flex flex-col items-start justify-start">
										<div className={'philosophy-title-card-content-title flex flex-row'}>
											<p className="t-highlights">DESIGN PLAYGROUND</p>
										</div>
										<p className="h2">Check out my playground with just-for-fun design projects.</p>
									</div>
								</div>
								<Url href={'/playground'}>
									<div className="philosophy-archetype fade-section fade-section--delay-1 flex flex-col items-center justify-center text-center">
										<ArchetypeImage className="philosophy-archetype-background fade-section fade-section--delay-2" />
										<ArrowUpRightIcon size={'248'} className="philosophy-archetype-icon" />
									</div>
								</Url>
							</article>
						</div>
					)}
				</article>
			</section>
		</main>
	);
}
