import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<Link href={'/modal-routes'} className="p-2 bg-slate-400">
				Modal Routes
			</Link>
		</main>
	);
}
