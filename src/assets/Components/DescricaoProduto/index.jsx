import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import produtosData from '../../Data/produtos.json';
import Contato from '../Contato';
import MenuNav from '../Nav';
import Page404 from '../Page404';
import Produtos from '../Produtos';

export default function DescricaoProduto() {
	const { id } = useParams();

	const produtoSelecionado = produtosData.find(
		(item) => item.id === Number(id)
	);

	const [produtoDestaque, setProdutoDestaque] = useState([produtoSelecionado]);

	if (!produtoSelecionado) return <Page404 />;

	useEffect(() => {
		if (produtoSelecionado !== produtoDestaque) {
			setProdutoDestaque([produtoSelecionado]);
		}

		if (
			(id && produtoSelecionado === null) ||
			(id && produtoSelecionado === undefined)
		)
			<Page404 />;
	}, [produtoSelecionado]);

	return (
		<>
			<MenuNav />
			<div>
				{produtoDestaque.map((elementos) => (
					<>
						<div className="flex flex-col justify-center tablet:flex-row tablet:p-8 laptop:p-16">
							<img
								src={elementos.imagem}
								className="w-full rounded-xl tablet:w-5/12"
								alt={elementos.nome}
							/>

							<div className="flex flex-col p-4 gap-4 tablet:p-8 tablet:w-2/3 laptop:gap-8">
								<h2 className="text-2xl laptop:text-[52px] text-corTituloProduto font-semibold">
									{elementos.nome}
								</h2>
								<span className="text-black text-base laptop:text-lg font-semibold">
									R$ {elementos.preco.toFixed(2)}
								</span>
								<p className="text-sm laptop:text-lg font-normal text-corTituloProduto">
									{elementos.descricao}
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-wrap my-4 tablet:p-8 laptop:p-16 ">
							<h3 className="px-4 text-2xl  laptop:text-[32px] laptop:pb-8 text-corTituloProduto font-bold">
								Produtos Similares
							</h3>
							<Produtos
								itemProdutos={produtosData.filter(
									(produto) =>
										produto.category.label === elementos.category.label &&
										produto !== produtoSelecionado
								)}
							/>
						</div>
					</>
				))}
			</div>
			<Contato />
		</>
	);
}
