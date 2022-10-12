/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcSearch } from 'react-icons/fc';

import logo from '/img/logo.svg';

export default function MenuNav({
	setBusca,
	busca,
	loginAtivo,
	menuAdministrador,
}) {
	// Abre o input search ao clicar no icone
	const [openInput, setOpenInput] = useState(false);
	const [pesquisaUsuario, setPesquisaUsuario] = useState('');

	useEffect(() => {
		console.log(pesquisaUsuario);
	}, [pesquisaUsuario]);
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
			{openInput && (
				<div className="z-10 flex flex-col bg-background-input rounded-lg items-center  tablet:hidden ">
					<input
						className="bg-background-input gap-2 rounded-lg w-[300px] h-10 mx-auto text-[14px] font-semibold placeholder:px-4"
						type="search"
						placeholder="O que deseja encontrar?"
						value={pesquisaUsuario}
						onBlur={() => {
							setOpenInput(false);
						}}
						onChange={(evento) => {
							setPesquisaUsuario(evento.target.value);
						}}
					/>
					<FcSearch size={24} className="hidden tablet:block" />
				</div>
			)}
			<div className="hidden bg-background-input rounded-lg items-center px-2 py-2 tablet:flex">
				<input
					className="bg-background-input gap-2 mx-auto rounded-lg w-54 text-[14px] font-semibold placeholder:px-4 tablet:w-64 laptop:w-[400px]"
					type="search"
					placeholder="O que deseja encontrar?"
					value={pesquisaUsuario}
					onBlur={() => {
						setOpenInput(false);
					}}
					onChange={(evento) => {
						setPesquisaUsuario(evento.target.value);
					}}
				/>
				<FcSearch size={24} />
			</div>

			<Link to="/login">
				<button
					type="button"
					className={
						loginAtivo
							? 'w-32 h-10 bg-white box-border border font-bold text-azul-botao text-sm border-azul-botao rounded'
							: 'hidden'
					}
				>
					Login
				</button>
			</Link>
			<Link to="/">
				<button
					type="button"
					className={
						menuAdministrador
							? 'w-32 h-10 bg-white box-border border font-bold text-azul-botao text-sm border-azul-botao rounded'
							: 'hidden'
					}
				>
					Menu Administrador
				</button>
			</Link>

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
