import styled from "styled-components";

export const ContainerNav = styled.nav`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	flex-direction: column;
	position: fixed;
	height: 100vh;
	background-color: #201f24;
	width: 20%;

	.profile {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		padding: 40px 15px;

		.profile-icon {
			background-color: #9373ff;
		}

		h2 {
			color: var(--dark-on-surface-on-surface-color, #e6e1e5);
			font-feature-settings:
				"clig" off,
				"liga" off;
			font-size: 14px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px; /* 142.857% */
		}

		h3 {
			color: var(--dark-on-surface-on-surface-medium-brush, rgba(230, 225, 229, 0.6));
			font-feature-settings:
				"clig" off,
				"liga" off;
			font-size: 12px;
			font-style: normal;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 0.4px;
		}
	}

	.container-button {
		height: 100%;
		display: flex;
		align-items: flex-end;
		gap: 20px;
		padding: 15px 15px;
	}

	.button-logout {
		display: flex;
		align-items: flex-end;
	}

	.linea {
		width: 100%;
		height: 2px;
		background-color: #e6e1e51f;
		margin: 20px auto;
	}
`;

export const ButtonMenu = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	gap: 15px;
	cursor: pointer;
	padding: 0 15px;
	transition: all 250ms ease;

	button {
		width: 100%;
		text-align: left;
	}

	.icon {
		font-size: 80px;
	}

	.container-arrow {
		width: 100%;
		display: flex;
		justify-content: flex-end;

		.arrow {
			font-size: 20px;
		}
	}

	&:hover {
		background-color: rgba(200, 191, 255, 0.08);
	}
`;

export const InputTask = styled.input`
	background-color: rgba(255, 255, 255, 0.5);
	color: white;
	border-radius: 5px 5px 0 0;
	width: 400px;
`;
