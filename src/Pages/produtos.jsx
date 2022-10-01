import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';
import Produtos from '../assets/Components/Produtos';
import produtos from '../assets/Data/produtos.json';

export default function PageProdutos() {
	return (
		<>
			<MenuNav loginAtivo />
			<div className="flex flex-col justify-between items-center tablet:py-10 gap-3 tablet:flex-row px-4 tablet:px-10">
				<h3 className="text-2xl text-corTituloProduto font-bold">
					Todos os Produtos
				</h3>
				<button className="botaoAzul" type="button">
					Adicionar Produto
				</button>
			</div>
			<Produtos
				pageProdutos
				itemProdutos={produtos.filter(
					(produto) => produto.category.label === 'Star Wars'
				)}
			/>
			<Produtos
				pageProdutos
				itemProdutos={produtos.filter(
					(produto) => produto.category.label === 'Console'
				)}
			/>
			<Produtos
				pageProdutos
				itemProdutos={produtos.filter(
					(produto) => produto.category.label === 'Diversos'
				)}
			/>

			<Contato />
		</>
	);
}
