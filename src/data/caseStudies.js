/**
 * Extended write-ups for featured projects.
 * Keys match `project.id` in CardsList.js.
 */
export const caseStudies = {
	'the-dojo': {
		subtitle:
			'How I built a React + Firebase project workspace for organising tasks and tracking progress.',
		sections: [
			{
				title: 'The goal',
				body:
					'I wanted a practical app where users could manage projects and tasks in one workspace — with clear navigation, filtered views, and data that persists between visits. It needed to feel like a real product, not just a tutorial follow-along.',
			},
			{
				title: 'What I built',
				list: [
					'Multi-route React app with dedicated project and task views',
					'Firebase / Firestore integration for reading and writing workspace data',
					'Filtered task lists using React Select',
					'Date handling with date-fns for deadlines and activity timestamps',
					'Responsive UI built from reusable components',
				],
			},
			{
				title: 'Challenges & learnings',
				list: [
					'Structuring Firestore data and wiring it cleanly into React state',
					'Keeping forms, filters, and routed views in sync without overcomplicating the UI',
					'Breaking the interface into smaller components as features grew',
					'Deploying a production build to Firebase Hosting',
				],
			},
			{
				title: 'Outcome',
				body:
					'The Dojo is my most complete full-stack frontend project so far — it brought together routing, backend integration, and UI craft in one deployed app. It gave me confidence working with Firebase and structuring a React codebase beyond small exercises.',
			},
		],
	},
};

export function getCaseStudy(projectId) {
	return caseStudies[projectId] || null;
}
