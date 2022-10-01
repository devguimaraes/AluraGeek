/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import logo from '/img/logo.svg';

export default function Contato() {
	return (
		<div className="flex flex-col tablet:flex-row   bg-[#bad3f7]">
			<div className="flex flex-col justify-center items-center laptop:flex-row laptop:justify-around  laptop:text-start gap-4 py-8 bg-[#bad3f7] tablet:w-1/2">
				<img src={logo} alt="logo Alura Geek" className="w-[176px]" />
				<ul className="pt-4 text-center text-base font-semibold text-[#464646]">
					<li className="p-1">Quem Somos</li>
					<li className="p-1">Politica de Privacidade</li>
					<li className="p-1">Programa de fidelidade</li>
					<li className="p-1">Nossas lojas</li>
					<li className="p-1">Quero ser franqueado</li>
					<li className="p-1">Anuncie aqui</li>
				</ul>
			</div>
			<div className="flex flex-col justify-start tablet:w-1/2 gap-4 px-4 py-8 bg-[#bad3f7]">
				<h3 className="text-xl text-corTituloProduto font-bold">
					Fale Conosco
				</h3>
				<form>
					<div className="flex flex-col py-4">
						<input
							type="text"
							className="h-[60px] px-4 w-full border-b-2 rounded placeholder:top-0"
							placeholder="Nome"
						/>
					</div>
					<div className="mb-4">
						<textarea
							name="mensagem"
							id="mensagem"
							cols="30"
							rows="8"
							placeholder="Escreva sua mensagem"
							className="w-full p-4 h-[82px] rounded border-b-2"
						/>

						<button className="botaoAzul !w-[150px] mt-4" type="button">
							Enviar Mensagem
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
