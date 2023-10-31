import Link from 'next/link';

const Segment = () => {
	return (
		<div className="flex gap-5">
			<Link
				href={'/segment/home'}
				className="flex w-20 h-20 bg-red-200 rounded-md items-center justify-center"
			>
				Home
			</Link>
			<Link
				href={'/segment/store'}
				className="flex w-20 h-20 bg-red-300 rounded-md items-center justify-center"
			>
				Store
			</Link>
			<Link
				href={'/segment/about'}
				className="flex w-20 h-20 bg-red-400 rounded-md items-center justify-center"
			>
				About
			</Link>
		</div>
	);
};

export default Segment;
