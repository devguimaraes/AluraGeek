/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';
import produtos from '../assets/Data/produtos.json';

export default function AdicionarProdutos() {
	const [data] = useState({
		urlImagem: '',
		categoria: '',
		nomeProduto: '',
		valorProduto: null,
		descricao: '',
	});
	const listaCategoria = [
		...new Set(produtos.map((elemento) => elemento.category.label)),
	];

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (dados) => {
		data.urlImagem = dados.urlImagem;
		data.categoria = dados.categoria;
		data.nomeProduto = dados.nomeProduto;
		data.valorProduto = dados.valorProduto;
		data.descricao = dados.descricao;

		alert('Produto adicionar com sucesso');
	};

	useEffect(() => {
		console.log(data);
		reset();
	}, [
		data.urlImagem,
		data.categoria,
		data.nomeProduto,
		data.valorProduto,
		data.descricao,
	]);

	return (
		<>
			<MenuNav menuAdministrador />
			<div className="px-8 my-10 flex flex-col justify-start gap-4 laptop:px-16">
				<h3 className="text-2xl text-corTituloProduto font-bold">
					Adicionar Novo Produto
				</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-10">
						<input
							type="text"
							name="urlImagem"
							{...register('urlImagem', {
								required: {
									value: true,
									message: 'Favor inserir a Url da Imagem',
								},
							})}
							placeholder="Digite a URL da imagem"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<p className="text-red-700 font-semibold">
							{errors.urlImagem?.message}
						</p>
						<select
							name="categoria"
							{...register('categoria', {
								required: true,
								message: 'Favor escolher uma categoria para o produto',
							})}
						>
							{listaCategoria.map((elementos) => (
								<option key={elementos}>{elementos}</option>
							))}
						</select>
						<p className="text-red-700 font-semibold">
							{errors.categoria?.message}
						</p>
						<input
							{...register('nomeProduto', {
								required: {
									value: true,
									message: 'Favor informar o nome do Produto',
								},
							})}
							type="text"
							placeholder="Nome do Produto"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<p className="text-red-700 font-semibold">
							{errors.nomeProduto?.message}
						</p>
						<input
							{...register('valorProduto', {
								required: {
									value: true,
									message: 'O valor do Produto é obrigatório',
								},
								pattern: {
									value:
										/^([1-9]{1}[\d]{0,2}(\.[\d]{3})*(,[\d]{0,2})?|[1-9]{1}[\d]{0,}(,[\d]{0,2})?|0(,[\d]{0,2})?|(,[\d]{1,2})?)$/,
									message: 'Formato do valor incorreto',
								},
							})}
							placeholder="Valor do Produto em R$"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<p className="text-red-700 font-semibold">
							{errors.valorProduto?.message}
						</p>
						<input
							{...register('descricao', {
								required: {
									value: true,
									message: 'Favor inserir a descricao do produto',
								},
							})}
							type="text"
							placeholder="Descrição do Produto"
							className="border-b-[2px] w-[328] h-[100px]  py-3 gap-4"
						/>
						<p className="text-red-700 font-semibold">
							{errors.descricao?.message}
						</p>

						<button
							type="submit"
							className="botaoAzul !w-[328px] laptop:!w[559px]"
						>
							Adicionar Produto
						</button>
					</div>
				</form>
			</div>
			<Contato />
		</>
	);
}
