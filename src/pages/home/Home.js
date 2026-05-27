import React from 'react';
import CardsList from './CardsList';

//styles
import './Home.css';

export default function Home() {
	const cards = CardsList();

	return (
		<div className="home">
			<h2 className="page-title">Sample Projects</h2>
			<p>Some of my recent builds using JavaScript</p>
			<div className="content">
				{cards.map((card) => (
					<div className="card" key={card.src}>
						<a href={card.href} target="_blank">
							<p>{card.alt}</p>
							<div className="wrapper">
								<img src={card.src} alt={card.alt} />
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
