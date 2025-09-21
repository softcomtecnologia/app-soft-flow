'use client';
const SimpleBar = dynamic(() => import('simplebar-react'),{ssr: false});
import { useProjectGannt } from '../hooks';
import { GanttProjectItem } from '../types';
import Project from './Project';
import { projects } from './data';
import dynamic from "next/dynamic";

const ProjectList = () => {
	const { selectedProject, onSelectProject } = useProjectGannt();

	return (
		<SimpleBar style={{ maxHeight: '535px', width: '100%' }}>
			{projects.map((project, index) => {
				return (
					<Project
						project={project}
						key={index.toString()}
						selectedProject={selectedProject}
						onSelectProject={(p: GanttProjectItem) => onSelectProject(p)}
					/>
				);
			})}
		</SimpleBar>
	);
};

export default ProjectList;
