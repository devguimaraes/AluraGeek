import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/login';
import Produtos from './Pages/produtos';

export default function AppRouter() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/produtos" element={<Produtos />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Router>
	);
}
