import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

//styles
import './LinksList.css';

export default function LinksList() {
	const links = [
		{
			text: 'Github',
			href: 'https://github.com/ymk-coder-star',
			icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
		},
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/yisroel-krausz-b95100412/',
			icon: <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />,
		},
		{
			text: 'Email',
			href: 'mailto:ymk613.dev@gmail.com',
			icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
		},
	];

	return (
		<div className="links-list">
			<h3>Links</h3>
			<ul>
				{links.map((link) => (
					<li key={link.text}>
						<a href={link.href} title={link.text} target="_blank">
							{link.icon}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
