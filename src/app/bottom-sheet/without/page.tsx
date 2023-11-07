'use client';

import BottomSheet from '@/components/bottom-sheet/BottomSheet';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Without = () => {
	const { back } = useRouter();

	const [isOpen, setIsOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const openModal = () => {
		setIsAnimating(true);
		setIsOpen(true);
	};

	const close = () => {
		setIsAnimating(false);
		setTimeout(() => {
			setIsOpen(false);
		}, 200);
	};
	return (
		<>
			<div className="flex flex-col justify-center items-center w-full gap-3">
				<button type="button" onClick={openModal} className="p-2 bg-red-200 rounded-md">
					바텀시트 열기 (Without useOverlay)
				</button>
				<button type="button" className="p-2 bg-stone-300 rounded-md" onClick={back}>
					뒤로가기
				</button>
			</div>
			{isOpen && (
				<BottomSheet open={isAnimating} onClose={close}>
					<div>컨텐츠</div>
				</BottomSheet>
			)}
		</>
	);
};

export default Without;
