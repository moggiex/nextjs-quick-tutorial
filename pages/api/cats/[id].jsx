import { cats } from '../../../data';

// http://localhost:3000/api/cats/:id

export default function handler(req, res) {
	// find cat in object

	// console.log(req.query.id);
	const { id } = req.query;

	const cat = cats.find((cat) => cat.id === Number(id));

	if (!cat) {
		return res.status(401).json({ error: true, msg: 'no cat found' });
	}

	return res.status(200).json(cat);

	// res.status(200).json({ cats });
}
