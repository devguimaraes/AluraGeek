/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';

export default function Login() {
	const navigate = useNavigate();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [data] = useState({ email: 'admin@admin.com', senha: '123456789' });

	const onSubmit = (dados) => {
		if (dados.email === data.email && dados.senha === data.senha) {
			alert('Login efetuado com sucesso');
			navigate('/produtos', { replace: false });
		} else {
			alert('Login e senha não conferem');
			reset();
		}
	};

	useEffect(() => {
		reset();
	}, [data.email, data.senha]);

	return (
		<>
			<MenuNav />
			<div className="w-full flex justify-center text-center my-[120px]">
				<div className="w-[275px] laptop:w-[423px] flex flex-col justify-center items-center ">
					<h3 className="text-center text-[18px] text-corTituloProduto font-bold mb-8">
						Iniciar Sessão
					</h3>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label htmlFor="email">
								<input
									type="email"
									name="email"
									{...register('email', {
										required: {
											value: 'required',
											message: 'Campo e-mail obrigatório',
										},
										pattern: {
											value:
												/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: 'Endereço de e-mail inválido',
										},
									})}
									className="w-[274px] laptop:w-[423px] py-3 gap-1"
									placeholder="Escreva seu e-mail"
								/>
								<p className="text-red-700 font-semibold">
									{errors.email?.message}
								</p>
							</label>
						</div>
						<br />
						<div>
							<label htmlFor="senha">
								<input
									type="password"
									name="senha"
									{...register('senha', {
										required: {
											value: true,
											message: 'O campo senha é obrigatório',
										},
										pattern: {
											value: /^[a-zA-Z0-9]{8,}/,
											message: 'A senha deve conter no mínimo oito caracteres',
										},
									})}
									className="border-b-[2px] w-[274px] laptop:w-[423px] py-3 gap-1"
									placeholder="Digite sua senha"
								/>
								<p className="text-red-700 font-semibold">
									{errors.senha?.message}
								</p>
							</label>
						</div>
						<button type="submit" className="botaoAzul mt-8">
							Enviar
						</button>
					</form>
				</div>
			</div>
			<footer>
				<Contato />
			</footer>
		</>
	);
}
