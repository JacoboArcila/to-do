import styled from "styled-components";

export const Task = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #201f24;
	border-radius: 5px;
	padding: 10px 20px;
	gap: 20px;
	margin-right: 30px;
	margin-bottom: 10px;

	.task-text {
		.task-title {
			font-size: 20px;
			margin-bottom: -5px;
			width: 500%;
		}

		.task-date {
			font-size: 15px;
			color: grey;
		}
	}
`;
