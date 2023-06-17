import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyCardPage from '@/pages/MyCardPage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MyCardPage />} />
		</Routes>
	</BrowserRouter>
);

export default App;
