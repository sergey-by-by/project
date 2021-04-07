import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';
import signImg from '../image/sign.svg';

const NavBarStyled = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 999;
height: 80px;
width: 100vw;
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

export const NavBar = () => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt="картинка" />
			<H1>Mak</H1>

		</Logo>
		<div>

			<Login><img src={signImg} atl="вход" />
				<p> Войти</p> </Login>
		</div>
	</NavBarStyled>

)