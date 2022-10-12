import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';
import Produtos from '../assets/Components/Produtos';
import Arrayprodutos from '../assets/Data/produtos.json';

export default function PageProdutos() {
	const [listaProdutos, setListaProdutos] = useState(
		Arrayprodutos.sort((a, b) => (a > b ? 1 : -1))
	);
	const [busca, setBusca] = useState('');
	console.log(busca);

	return (
		<>
			<MenuNav setBusca={setBusca} busca={busca} loginAtivo />
			<div className="flex flex-col justify-between items-center tablet:py-10 gap-3 tablet:flex-row px-4 tablet:px-10">
				<h3 className="text-2xl text-corTituloProduto font-bold">
					Todos os Produtos
				</h3>
				<Link to="/adicionarprodutos">
					<button className="botaoAzul" type="button">
						Adicionar Produto
					</button>
				</Link>
			</div>
			<Produtos
				pageProdutos
				itemProdutos={listaProdutos.filter(
					(produto) => produto.category.label === 'Star Wars'
				)}
			/>
			<Produtos
				pageProdutos
				itemProdutos={listaProdutos.filter(
					(produto) => produto.category.label === 'Console'
				)}
			/>
			<Produtos
				pageProdutos
				itemProdutos={listaProdutos.filter(
					(produto) => produto.category.label === 'Diversos'
				)}
			/>

			<Contato />
		</>
	);
}
