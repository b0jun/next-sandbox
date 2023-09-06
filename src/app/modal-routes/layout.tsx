export default async function Layout(props: {
	children: React.ReactNode;
	parallel: React.ReactNode;
}) {
	return (
		<main>
			{props.children}
			{props.parallel}
		</main>
	);
}
