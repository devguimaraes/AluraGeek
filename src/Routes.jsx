import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdicionarProdutos from './Pages/addProduto';

import Home from './Pages/Home';
import Login from './Pages/login';
import PageProdutos from './Pages/produtos';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/produtos" element={<PageProdutos />} />
				<Route path="/adicionarprodutos" element={<AdicionarProdutos />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}
