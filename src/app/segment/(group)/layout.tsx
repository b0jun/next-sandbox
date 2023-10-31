import NavLink from '@/components/segment/NavLink';

const links = [
	{ label: '🏡 Home', targetSegment: 'home' },
	{ label: '📦 Store', targetSegment: 'store' },
	{ label: '📘 About', targetSegment: 'about' },
];

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<main>
			{links.map((l, i) => (
				<NavLink key={i} {...l} />
			))}
			{props.children}
		</main>
	);
}
