import Contato from '../assets/Components/Contato';
import MenuNav from '../assets/Components/Nav';

export default function Login() {
	return (
		<>
			<MenuNav loginAtivo />
			<div className="w-full flex justify-center text-center my-[90px]">
				<div className="w-[275px] laptop:w-[423px] flex flex-col justify-center items-center ">
					<h3 className="text-center text-[18px] text-corTituloProduto font-bold mb-8">
						Iniciar Sessão
					</h3>
					<form action="">
						<div>
							<label htmlFor="email">
								<input
									type="text"
									name="email"
									className="w-[274px] laptop:w-[423px] py-3 gap-1"
									placeholder="Escreva seu e-mail"
								/>
							</label>
						</div>
						<br />
						<div>
							<label htmlFor="senha">
								<input
									type="password"
									name="senha"
									className="border-b-[2px] w-[274px] laptop:w-[423px] py-3 gap-1"
									placeholder="Digite sua senha"
								/>
							</label>
						</div>
					</form>
					<button type="button" className="botaoAzul mt-8">
						Enviar
					</button>
				</div>
			</div>
			<footer>
				<Contato />
			</footer>
		</>
	);
}
