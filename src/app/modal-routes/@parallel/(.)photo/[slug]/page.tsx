import Image from 'next/image';
import Modal from '@/components/modal-routes/Modal';
import { imgUrls } from '@/app/modal-routes/page';

export default function Photo({ params: { slug } }: { params: { slug: number } }) {
	return (
		<Modal>
			<div className="w-4/5 h-4/5 bg-white fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 p-14 shadow-md overflow-hidden">
				<Image
					src={imgUrls[slug]}
					alt={imgUrls[slug]}
					width={100}
					height={100}
					className="w-full h-full object-contain cursor-pointer shadow-md"
					sizes="60vw"
					priority
				/>
			</div>
		</Modal>
	);
}
