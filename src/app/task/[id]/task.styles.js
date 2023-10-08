import styled from "styled-components";

export const ContainerTask = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.list-title {
		font-size: 42px;
		padding: 30px 0;
	}

	.list-tasks {
		width: 100%;
	}

	.add-task {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		padding: 20px 30px 20px 0;

		.container-task {
			cursor: pointer;
			display: flex;
			align-items: center;
			gap: 10px;
			padding: 10px 20px;
			border-radius: 30px;
			width: 100%;
			background-color: #6b60a1;
			transition: all 400ms ease;

			&:hover {
				background-color: #867cb5;
			}
		}
	}
`;
