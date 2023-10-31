export { default } from 'next-auth/middleware';

export const config = {
	matcher: ['/next-auth/userposts/:path*'],
};
