import profilePic from '../../assets/profile-pic.jpg';
import Bio from './Bio';
import TechStackList from './TechStackList';
import LinksList from './LinksList';

//styles
import './About.css';

export default function About() {
	return (
		<div className="about">
			<h1 className="page-title">About me</h1>
			<div className="container">
				<div className="image-wrap">
					<img src={profilePic} alt="profile picture" />
				</div>
				<div className="text-section">
					<Bio />
					<TechStackList />
					<LinksList />
				</div>
			</div>
		</div>
	);
}
