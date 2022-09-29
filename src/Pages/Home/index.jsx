import Header from '../../assets/Components/Header';
import MenuNav from '../../assets/Components/Nav';
import Produtos from '../../assets/Components/Produtos';

export default function Home() {
	return (
		<>
			<header>
				<MenuNav />
				<Header />
			</header>
			<main>
				<Produtos />
			</main>
		</>
	);
}
