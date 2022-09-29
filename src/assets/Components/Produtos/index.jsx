/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import produtos from '../../Data/produtos.json';

export default function Produtos() {
	const starWars = [...produtos];

	return (
		<div className="flex flex-col p-4">
			<div className="flex justify-between items-center pb-4">
				<h2 className="text-2xl text-corTituloProduto font-bold">Star Wars</h2>
				<div className="flex items-center gap-2  text-sm text-azul-botao font-bold">
					<Link to="/produtos">Ver Tudo</Link>
					<FaChevronRight className="text-azul-botao" />
				</div>
			</div>
			<div className="flex justify-around flex-wrap gap-4">
				{starWars.map((elemento, index) => (
					<div key={index}>
						<img src={elemento.imagem} alt={elemento.nome} />
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
						>
							Ver Produto
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
