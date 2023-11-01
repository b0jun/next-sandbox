import Link from 'next/link';

const Segment = () => {
	return (
		<div className="flex flex-col">
			<Link
				href={'/segment/home'}
				className="flex items-center justify-center bg-red-200 h-9"
			>
				Go To Home
			</Link>
		</div>
	);
};

export default Segment;
