/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';
import logo from '/img/Logo_PNG.png';
import InputSearchMobile from './InputSearchMobile';

export default function MenuNav({ loginAtivo }) {
	// Abre o input search ao clicar no icone
	const [openInput, setOpenInput] = useState(false);

	return (
		<div
			className={
				openInput
					? 'flex flex-wrap justify-around items-center p-4 tablet:pl-8 gap-5 bg-white h-[200px] laptop:px-[152px] laptop:py-10 '
					: 'flex flex-wrap justify-around items-center p-4 tablet:pl-8 gap-5 bg-white h-[72px] laptop:px-[152px] laptop:py-10 laptop:pb-20 '
			}
		>
			<Link to="/">
				<img src={logo} alt="logo Alura Geek" className="laptop:w-[176px]" />
			</Link>
			{openInput && <InputSearchMobile setOpenInput={setOpenInput} />}
			<div className="hidden bg-background-input rounded-lg items-center px-2 py-2 tablet:flex">
				<input
					className="bg-background-input gap-2 mx-auto rounded-lg w-54 text-[14px] font-semibold tablet:w-64 laptop:w-[400px]"
					type="search"
					placeholder="O que deseja encontrar?"
					onBlur={() => {
						setOpenInput(false);
					}}
				/>
				<FcSearch size={24} />
			</div>

			<button
				type="button"
				className={
					loginAtivo
						? 'hidden'
						: 'w-32 h-10 bg-white box-border border font-bold text-azul-botao text-sm border-azul-botao'
				}
			>
				Login
			</button>
			<FcSearch
				size={24}
				className={openInput ? 'hidden tablet:hidden' : 'block tablet:hidden'}
				onClick={() => {
					setOpenInput(!openInput);
				}}
			/>
		</div>
	);
}
