import { useParams } from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import CaseStudy from "./Casestudy.jsx";
import Maintenance from "./Maintenance.jsx";
import { projects } from "../components/ProjectCard/ProjectList.jsx";

export default function ProjectRoute() {
	const { id } = useParams();
	const project = projects.find((item) => item.slug === id);

	if (!project || !project.completed) {
		return (
			<Layout navbarVariant="notfound" footerVariant="notfound">
				<Maintenance />
			</Layout>
		);
	}

	return (
		<Layout>
			<CaseStudy project={project} />
		</Layout>
	);
}
