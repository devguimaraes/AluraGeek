import Contato from '../../assets/Components/Contato';
import Header from '../../assets/Components/Header';
import MenuNav from '../../assets/Components/Nav';
import Produtos from '../../assets/Components/Produtos';
import produtos from '../../assets/Data/produtos.json';

export default function Home() {
	return (
		<>
			<header>
				<MenuNav />
				<Header />
			</header>
			<main>
				<Produtos
					itemProdutos={produtos.filter(
						(produto) => produto.category.label === 'Star Wars'
					)}
				/>
				<Produtos
					itemProdutos={produtos.filter(
						(produto) => produto.category.label === 'Console'
					)}
				/>
				<Produtos
					itemProdutos={produtos.filter(
						(produto) => produto.category.label === 'Diversos'
					)}
				/>
				<Contato />
			</main>
		</>
	);
}
