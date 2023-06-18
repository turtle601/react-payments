import React, { PropsWithChildren, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface LinkButtonProps {
	to: string | number;
}

const LinkButton = ({ to, children }: PropsWithChildren<LinkButtonProps>) => {
	const navigate = useNavigate();

	const onClickLink = useCallback(() => {
		if (typeof to === 'string') {
			navigate(to);
			return;
		}

		navigate(to);
	}, [to]);

	return (
		<button type="button" onClick={onClickLink}>
			{children}
		</button>
	);
};

export default LinkButton;
