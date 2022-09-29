export default function Header() {
	return (
		<section>
			<div className="bg-headerImage bg-cover bg-center bg-no-repeat h-[192px] flex flex-col justify-end p-4 gap-4 tablet:bg-headerImageTablet tablet:h-[352px] tablet:p-8 laptop:p-16">
				<h2 className="text-white text-2xl font-bold tablet:text-[52px]">
					Dezembro Promocional
				</h2>
				<h3 className="text-white text-base font-semibold tablet:text-[22px]">
					Produtos selecionados com 33% de desconto
				</h3>
				<button
					className="text-white bg-azul-botao text-sm font-semibold w-[119px] h-[40px] gap-2 rounded"
					type="button"
				>
					Ver Consoles
				</button>
			</div>
		</section>
	);
}
