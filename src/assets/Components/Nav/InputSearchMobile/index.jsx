import { FcSearch } from 'react-icons/fc';

export default function InputSearchMobile({ setOpenInput }) {
	return (
		<div className="z-10 flex flex-col bg-background-input rounded-lg items-center  tablet:hidden ">
			<input
				className="bg-background-input gap-2 rounded-lg w-[300px] h-10 mx-auto text-[14px] font-semibold"
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
