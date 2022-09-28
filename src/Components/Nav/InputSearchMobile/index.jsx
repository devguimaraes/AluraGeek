import { FcSearch } from 'react-icons/fc';

export default function InputSearchMobile({ setOpenInput }) {
	return (
		<div className="flex flex-col bg-background-input rounded-lg items-center px-2 py-2  tablet:flex ">
			<input
				className="bg-background-input gap-2 rounded-lg w-[350px] mx-auto text-[14px] font-semibold"
				type="search"
				placeholder="O que deseja encontrar?"
				onBlur={() => {
					setOpenInput(false);
				}}
			/>
			<FcSearch size={24} className="hidden tablet:block" />
		</div>
	);
}
