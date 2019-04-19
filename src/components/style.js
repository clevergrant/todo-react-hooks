import styled from 'styled-components'

export const SApp = styled.div`
	background: #209cee;
	padding: 30px;
	height: 100vh;
`

export const STodoList = styled.div`
	background: #e8e8e8;
	border-radius: 4px;
	padding: 5px;
	max-width: 400px;
`

export const STodo = styled.div`
	background: #fff;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
	padding: 3px 10px;
	font-size: 12px;
	margin-bottom: 6px;
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	text-decoration: ${props => props.isCompleted ? `line-through` : `none`};
`