'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();

	return (
		<div className="bg-slate-400">
			<div
				className={'w-full h-screen bg-black bg-opacity-50 blur-sm fixed top-0 left-0 z-99'}
				onClick={() => router.back()}
			/>
			{children}
		</div>
	);
}
