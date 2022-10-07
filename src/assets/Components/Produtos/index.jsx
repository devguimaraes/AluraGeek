/* eslint-disable react/no-array-index-key */
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function Produtos({ itemProdutos, pageProdutos }) {
	const itens = [...itemProdutos];
	const navigate = useNavigate();

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
							{itens[0].category.label}
						</h2>
						<div className="flex items-center gap-2  text-sm text-azul-botao font-bold">
							<Link to="/produtos">Ver Tudo</Link>
							<FaChevronRight className="text-azul-botao" />
						</div>
					</>
				)}
			</div>
			<div className="flex justify-around tablet:justify-between flex-wrap gap-4">
				{itens.map((elemento, index) => (
					<div key={index}>
						<img
							src={elemento.imagem}
							alt={elemento.nome}
							className="rounded-xl"
						/>
						<h3 className="text-corTituloProduto text-sm font-normal pt-2">
							{elemento.nome}
						</h3>
						<span className="text-black font-semibold">
							R${elemento.preco.toFixed(2)}
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
								redirecionaProduto(elemento);
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
