import Head from 'next/head';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import Nav from '../../components/Nav/Nav';
import DefaultLayout from '../../layout/default';

export default function Cats() {
	const [cats, setCats] = useState([]);

	const fetchCats = async () => {
		const response = await fetch('/api/cats');
		const data = await response.json();
		console.log(data);
		setCats(data.cats);
	};

	useEffect(() => {
		fetchCats();
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<DefaultLayout>
				<div className='container mt-4'>
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							// justifyContent: 'space-evenly',
						}}>
						{cats
							? cats.map((cat) => (
									<Card
										key={cat.id}
										name={cat.name}
										id={cat.id}
										phone={cat.phone}
										email={cat.email}
										image={{
											url: cat.image.url,
											alt: cat.image.alt,
										}}
										isFavourite={cat.favoured}
									/>
							  ))
							: ''}
					</div>
				</div>
			</DefaultLayout>
		</>
	);
}
