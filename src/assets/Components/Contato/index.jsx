/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '/img/logo.svg';

export default function Contato() {
	const [formContato] = useState({ nome: '', mensagem: '' });
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		formContato.nome = data.nome;
		formContato.mensagem = data.mensagem;
		alert('Mensagem enviada');
	};

	useEffect(() => {
		if (formContato.nome !== '') console.log(formContato);
		reset();
	}, [formContato.nome, formContato.mensagem]);

	return (
		<div className="flex flex-col tablet:flex-row   bg-[#bad3f7]">
			<div className="flex flex-col justify-center items-center laptop:flex-row laptop:justify-around  laptop:text-start gap-4 py-8 bg-[#bad3f7] tablet:w-1/2">
				<img src={logo} alt="logo Alura Geek" className="w-[176px]" />
				<ul className="pt-4 text-center text-base font-semibold text-[#464646]">
					<li className="p-1">Quem Somos</li>
					<li className="p-1">Politica de Privacidade</li>
					<li className="p-1">Programa de fidelidade</li>
					<li className="p-1">Nossas lojas</li>
					<li className="p-1">Quero ser franqueado</li>
					<li className="p-1">Anuncie aqui</li>
				</ul>
			</div>
			<div className="flex flex-col justify-start tablet:w-1/2 gap-4 px-4 py-8 bg-[#bad3f7]">
				<h3 className="text-xl text-corTituloProduto font-bold">
					Fale Conosco
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col py-4">
						<input
							type="text"
							name="nome"
							{...register('nome', {
								required: {
									value: true,
									message: 'Favor informar seu nome',
								},
							})}
							className="h-[60px] px-4 w-full border-b-2 rounded placeholder:top-0"
							placeholder="Nome"
						/>
						<p className="text-red-700 font-semibold mt-1">
							{errors.nome?.message}
						</p>
					</div>
					<div className="mb-4">
						<textarea
							name="mensagem"
							{...register('mensagem', {
								required: {
									value: true,
									message: 'A mensagem precisa ter entre 20 e 500 caracteres',
								},
								minLength: 20,
								maxLength: 500,
							})}
							id="mensagem"
							cols="30"
							rows="8"
							placeholder="Escreva sua mensagem"
							className="w-full p-4 h-[82px] rounded border-b-2"
						/>
						<p className="text-red-700 font-semibold">
							{errors.mensagem?.message}
						</p>

						<button className="botaoAzul !w-[150px] mt-4" type="submit">
							Enviar Mensagem
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
