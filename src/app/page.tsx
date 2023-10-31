import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col">
			<Link href={'/modal-routes'} className="p-2 bg-slate-200">
				Modal Routes
			</Link>
			<Link href={'/next-auth'} className="p-2 bg-slate-300">
				Next Auth
			</Link>
			<Link href={'/segment'} className="p-2 bg-slate-400">
				Segment
			</Link>
		</main>
	);
}
