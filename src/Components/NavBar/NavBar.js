import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
background-color: #299B01;
color: white;

`;


const Logo = styled.div`
display: flex;
align-items: center;
`;

const H1 = styled.h1``;

const ImgLogo = styled.img`
width: 50px;
`;

const Login = styled.button`
cursor: pointer;
background-color: #299B01;
border-color: transparent;
color: white;
font-size: 16px;

`;

const User = styled.div`
display: flex;
align-items: center;
text-align: center;
`;
const LogOut = styled.span`
font-size: 20px;
font-weight: 700px;
cursor: pointer;
margin-right: 30px;
`;

const Figure = styled.figure`
margin: 0 30px;
`;



export const NavBar = ({ authentication, logIn, logOut }) => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt="картинка" />
			<H1>Mak</H1>

		</Logo>
		{authentication ?
			<User>
				<Figure>
					<img src={signImg} alt={authentication.displayName} />
					<figcaption>{authentication.displayName}</figcaption>
				</Figure>
				<LogOut title="Выйти" onClick={logOut}>X</LogOut>
			</User>
			:
			<Login onClick={logIn} >
				<Figure>
					<img src={signImg} alt="вход" />
					<figcaption>войти</figcaption>
				</Figure><p></p> </Login>}
	</NavBarStyled>

)