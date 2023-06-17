import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Title = styled.h1`
	color: #abc888;
`;

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Title>home</Title>} />
			<Route path="/hi" element={<Title>hi</Title>} />
		</Routes>
	</BrowserRouter>
);

export default App;
