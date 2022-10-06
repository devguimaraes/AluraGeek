import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';

export default function AdicionarProdutos() {
	return (
		<>
			<MenuNav menuAdministrador />
			<div className="px-8 my-10 flex flex-col justify-start gap-4 laptop:px-16">
				<h3 className="text-2xl text-corTituloProduto font-bold">
					Adicionar Novo Produto
				</h3>
				<form>
					<div className="flex flex-col gap-10">
						<input
							type="text"
							placeholder="Digite a URL da imagem"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<input
							type="text"
							placeholder="Categoria"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<input
							type="text"
							placeholder="Nome do Produto"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<input
							type="number"
							placeholder="Valor do Produto  R$"
							pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
							className="border-b-[2px] w-[328] h-[58px]  py-3 gap-4"
						/>
						<input
							type="text"
							placeholder="Descrição do Produto"
							className="border-b-[2px] w-[328] h-[100px]  py-3 gap-4"
						/>

						<button
							type="button"
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
