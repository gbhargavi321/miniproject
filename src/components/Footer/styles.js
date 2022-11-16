import styled from 'styled-components';

export const Box = styled.div`
	padding: 80px 60px;
	background:black;
	width:100%;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}

`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center
	max-width: 1000px;
	margin: 0 auto;
`
export const Row = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: first baseline;
	flex-wrap:wrap;

@media (max-width: 600px) {
	flex-direction:column;
	justify-content:first baseline;
	align-items:first baseline;
	padding-left:45px;

}
`;


export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	
`;



// export const Box = styled.div`
// padding: 80px 60px;
// background: black;
// width: 100%;


// @media (max-width: 1000px) {
// 	padding: 70px 30px;
// }
// `;

// export const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	max-width: 1000px;
// 	margin: 0 auto;
// 	/* background: red; */
   

// `

// export const Column = styled.div`
// display: flex;
// flex-direction: column;
// text-align: left;
// margin-left: 60px;
// `;

// export const Row = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fill,
// 						minmax(185px, 1fr));
// grid-gap: 20px;

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
// `;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: #d51739;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #d51739;
margin-bottom: 40px;
font-weight: bold;
`;

export const Columnrow = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column
`;