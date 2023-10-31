import Providers from '@/components/next-auth/Provider';

export default async function Layout(props: { children: React.ReactNode }) {
	return <Providers>{props.children}</Providers>;
}
