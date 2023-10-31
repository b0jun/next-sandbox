'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

type Props = {
	label: string;
	targetSegment: string;
};

const NavLink = ({ label, targetSegment }: Props) => {
	const activeSegment = useSelectedLayoutSegment();
	return (
		<Link
			style={{
				textDecoration: activeSegment === targetSegment ? 'underline' : 'none',
				padding: '0.5rem',
			}}
			href={`/segment/${targetSegment}`}
		>
			{label}
		</Link>
	);
};

export default NavLink;
