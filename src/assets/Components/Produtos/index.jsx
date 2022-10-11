/* eslint-disable react/no-array-index-key */
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Produtos({ itemProdutos, pageProdutos }) {
	const produtos = [...itemProdutos];
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	function redirecionaProduto(params) {
		navigate(`/descricaoProduto/${params.id}`, {
			state: { params },
			replace: true,
		});
	}

	return (
		<div className="flex flex-col p-4">
			<div className="flex justify-between items-center pb-4 tablet:px-10">
				{!pageProdutos && (
					<>
						<h2 className="text-2xl text-corTituloProduto font-bold">
							{produtos[0].category.label}
						</h2>
						<div className="flex items-center gap-2  text-sm text-azul-botao font-bold">
							<Link to="/produtos">Ver Tudo</Link>
							<FaChevronRight className="text-azul-botao" />
						</div>
					</>
				)}
			</div>
			<div className="flex justify-around tablet:justify-between flex-wrap gap-4">
				{produtos.map((itemProduto, index) => (
					<div key={index}>
						<img
							src={itemProduto.imagem}
							alt={itemProduto.nome}
							className="rounded-xl"
						/>
						<h3 className="text-corTituloProduto text-sm font-normal pt-2">
							{itemProduto.nome}
						</h3>
						<span className="text-black font-semibold">
							R${itemProduto.preco.toFixed(2)}
						</span>
						<button
							type="button"
							className="flex
							items-center
							gap-2
							text-sm
							text-azul-botao
							font-bold"
							onClick={() => {
								redirecionaProduto(itemProduto);
							}}
						>
							Ver Produto
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
