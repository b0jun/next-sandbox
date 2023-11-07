import Provider from '@/components/bottom-sheet/Provider';

export default async function Layout(props: { children: React.ReactNode }) {
	return (
		<main className="flex min-h-full">
			<Provider>{props.children}</Provider>
		</main>
	);
}
