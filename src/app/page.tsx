import Link from 'next/link';

const linkList = [
	{
		title: 'Modal Routes',
		href: '/modal-routes',
		bg: 'bg-lime-100',
	},
	{
		title: 'Next Auth',
		href: '/next-auth',
		bg: 'bg-lime-200',
	},
	{
		title: 'Segment',
		href: '/segment',
		bg: 'bg-amber-100',
	},
];

export default function Home() {
	return (
		<main className="flex gap-2 p-4">
			{linkList.map(({ title, href, bg }, index) => (
				<Link
					key={index}
					href={href}
					className={`flex items-center justify-center text-center w-24 h-24 p-2 rounded-md ${bg}`}
				>
					{title}
				</Link>
			))}
		</main>
	);
}
