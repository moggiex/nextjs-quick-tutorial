import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

export default function Jumbotron() {
	const router = useRouter();

	return (
		<div className='p-5 mb-4 bg-light rounded-3 mt-3'>
			<div className='container-fluid py-5'>
				<h1 className='display-5 fw-bold'>Cats World</h1>
				<p className='col-md-8 fs-4'>
					Find your new best friedn today. Adopt a wonderful cat.
				</p>

				{/* <Link href={`/cats`}> */}
				<button
					className='btn btn-primary btn-lg'
					type='button'
					onClick={() => router.push('/cats')}>
					Start looking
				</button>
				{/* </Link> */}
			</div>
		</div>
	);
}
