import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	margin-top: 50px;
`;

export const ContainerCard = styled.div`
	background-color: #201f24;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px;
	cursor: pointer;
	transition: all 250ms ease;
	width: 20%;
	font-size: 22px;

	&:hover {
		background-color: #2d2c35;
	}
`;
