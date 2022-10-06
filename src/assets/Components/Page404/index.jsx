/* eslint-disable react/self-closing-comp */
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Page404() {
	const navigate = useNavigate();
	return (
		<div id="notfound">
			<div className="notfound">
				<div className="notfound-404">
					<div></div>
					<h1>404</h1>
				</div>
				<h2>Página não encontrada</h2>
				<p>
					A página que você está procurando pode estar temporariamente
					indisponivel, ter sido removida ou seu nome mudou.
				</p>
				<button
					className="a bg-black"
					type="button"
					onClick={() => {
						// -1 no navigate faz o usuário voltar a tela anterior
						navigate(-1);
					}}
				>
					... Voltar
				</button>
			</div>
		</div>
	);
}
