import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import Image from 'next/image';
import React from 'react';

type Props = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
};
const BottomSheet = ({ open, onClose, children }: Props) => {
	useLockBodyScroll();
	return (
		<>
			<div
				className={`fixed inset-0 bg-gray-300 duration-200 ${
					open ? 'opacity-40' : 'opacity-0'
				}`}
			/>
			<div className="fixed z-10 w-screen h-full">
				<div className="flex items-end justify-center min-h-full">
					<div
						className={`pt-4 px-4 w-full min-h-[300px] max-w-3xl relative rounded-t-3xl bg-white shadow-xl duration-200 ${
							open ? 'translate-y-0' : 'translate-y-full'
						}`}
					>
						<div className="mb-3 text-right">
							<button
								type="button"
								onClick={onClose}
								className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<Image
									src="/icons/ic_close.svg"
									alt="close"
									width={24}
									height={24}
								/>
							</button>
						</div>
						<div>{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BottomSheet;
