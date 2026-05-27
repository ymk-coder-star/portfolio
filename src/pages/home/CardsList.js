import {
	practice,
	memoryGame,
	movieApp,
	myMoney,
	shoppingList,
	tracalorie,
} from '../../assets/assetsHandler';

export default function CardsList() {
	const cards = [
		{
			src: myMoney,
			alt: 'myMoney app',
			href: 'https://mymoney-88a40.web.app/',
		},
		{
			src: movieApp,
			alt: 'Movie app',
			href: 'https://ymk-coder-star.github.io/flixx-app/',
		},
		{
			src: memoryGame,
			alt: 'Memory game',
			href: 'https://ymk-coder-star.github.io/memory-game/',
		},
		{
			src: tracalorie,
			alt: 'Tracalorie app',
			href: 'https://ymk-coder-star.github.io/tracalorie-app/',
		},
		{
			src: shoppingList,
			alt: 'Shopping list app',
			href: 'https://ymk-coder-star.github.io/Shopping-list/',
		},
		{
			src: practice,
			alt: 'JS practice',
			href: 'https://ymk-coder-star.github.io/Javascript-practice-main/index.html',
		},
	];

	return cards;
}
