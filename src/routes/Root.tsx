import React, { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Root = ({ children }: PropsWithChildren) => (
	<BrowserRouter>{children}</BrowserRouter>
);

export default Root;
