'use client';
import BottomSheet from '@/components/bottom-sheet/BottomSheet';
import { useOverlay } from '@toss/use-overlay';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const BottomSheetPage = () => {
	const { back } = useRouter();
	const overlay = useOverlay();

	const openBottomSheet = () => {
		overlay.open(({ isOpen, close, exit }) => (
			<BottomSheet
				open={isOpen}
				onClose={() => {
					close();
					setTimeout(() => {
						exit();
					}, 200);
				}}
			>
				<div>컨텐츠</div>
			</BottomSheet>
		));
	};

	return (
		<div className="flex flex-col justify-center items-center w-full gap-3">
			<button type="button" onClick={openBottomSheet} className="p-2 bg-red-200 rounded-md">
				바텀시트 열기 (Using useOverlay)
			</button>
			<Link className="p-2 bg-stone-300 rounded-md" href={'/bottom-sheet/without'}>
				Without useOverlay
			</Link>
			<button type="button" className="p-2 bg-stone-300 rounded-md" onClick={back}>
				뒤로가기
			</button>
		</div>
	);
};

export default BottomSheetPage;
