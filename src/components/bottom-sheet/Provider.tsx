'use client';
import { OverlayProvider } from '@toss/use-overlay';
import React from 'react';

const Provider = ({ children }: { children: React.ReactNode }) => {
	return <OverlayProvider>{children}</OverlayProvider>;
};

export default Provider;
