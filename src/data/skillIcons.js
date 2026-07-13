import {
	SiCreatereactapp,
	SiDatefns,
	SiFirebase,
	SiFontawesome,
	SiGithubpages,
	SiHtml5,
	SiNetlify,
	SiReact,
	SiReactrouter,
	SiSass,
	SiThemoviedatabase,
} from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';

/**
 * Official brand icon colors via react-icons.
 * `paths` + `viewBox` for multi-color SVG marks (e.g. JavaScript).
 * `bg` only where a brand tile is required.
 * Keys match skill names used in project card tags.
 */
export const skillIconMap = {
	'React': { Icon: SiReact, color: '#61DAFB' },
	'Firebase': { Icon: SiFirebase, color: '#FFCA28' },
	'Firebase Hosting': { Icon: SiFirebase, color: '#FFCA28' },
	'React Router': { Icon: SiReactrouter, color: '#CA4245' },
	'JavaScript': {
		viewBox: '0 0 128 128',
		paths: [
			{
				d: 'M1.408 1.408h125.184v125.185H1.408z',
				fill: '#F0DB4F',
			},
			{
				d: 'M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z',
				fill: '#323330',
			},
		],
	},
	'HTML': { Icon: SiHtml5, color: '#E34F26' },
	'CSS': { Icon: DiCss3, color: '#1572B6' },
	'SCSS': { Icon: SiSass, color: '#CC6699' },
	'date-fns': { Icon: SiDatefns, color: '#770C56' },
	'Create React App': { Icon: SiCreatereactapp, color: '#61DAFB' },
	'TMDB API': { Icon: SiThemoviedatabase, color: '#01D277' },
	'Font Awesome': { Icon: SiFontawesome, color: '#528DD7' },
	'Netlify': { Icon: SiNetlify, color: '#00C7B7' },
	'GitHub Pages': { Icon: SiGithubpages, color: '#181717' },
	'REST APIs': { label: 'API', color: '#4F46E5', bg: '#EEF2FF' },
	'React Select': { label: 'RS', color: '#1D4ED8', bg: '#EFF6FF' },
	'Local Storage': { label: 'LS', color: '#4F46E5', bg: '#EEF2FF' },
	'DOM Manipulation': { label: 'DOM', color: '#4F46E5', bg: '#EEF2FF' },
	'Problem Solving': { label: 'PS', color: '#B45309', bg: '#FFFBEB' },
};

export function getSkillIcon(skill) {
	return skillIconMap[skill] || null;
}
