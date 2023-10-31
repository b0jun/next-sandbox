import SignInButton from '@/components/next-auth/SignInButton';

export default function NextAuth() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-semibold">NextAuth</h1>
			<SignInButton />
		</main>
	);
}
