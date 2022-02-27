import Link from 'next/link';
import React from 'react';

export default function Nav() {
	return (
		<nav className='navbar navbar-light bg-light '>
			<div className='container-fluid'>
				<Link href={`/`}>
					<span className='navbar-brand mb-0 h1'>CatsWorld</span>
				</Link>
			</div>
		</nav>
	);
}
