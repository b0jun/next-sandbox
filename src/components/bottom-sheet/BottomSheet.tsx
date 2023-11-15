import React from 'react';

type Props = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
};
const BottomSheet = ({ open, onClose, children }: Props) => {
	return (
		<>
			<div
				className={`fixed inset-0 bg-gray-300 duration-200 ${
					open ? 'opacity-40' : 'opacity-0'
				}`}
			/>
			<div className="fixed z-10 w-screen h-full">
				<div className="flex min-h-full items-end justify-center">
					<div
						className={`p-4 w-full max-w-3xl relative rounded-t-3xl bg-white shadow-xl h-[320px] duration-200 ${
							open ? 'translate-y-0' : 'translate-y-[320px]'
						}`}
					>
						<div className="text-right">
							<button
								type="button"
								onClick={onClose}
								className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
							>
								<svg
									className="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
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
