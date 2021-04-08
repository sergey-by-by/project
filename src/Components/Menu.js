import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import banner from '../image/banner.png';

const MenuStyled = styled.main`
background-color: #ccc;
margin-top: 80px;
height: 500px;
`;

const SectionMenu = styled.section`
padding: 30px;
`;

const Banner = styled.img`
width: 100%;
`;

export const Menu = () => (
	<MenuStyled>
		<Banner src={banner} alt="banner" />
		<SectionMenu>
			<h2>Бургеры</h2>
			<ListItem itemList={dbMenu.burger} />
		</SectionMenu>
		<section>
			<h2>Закуски и напитки</h2>
			<ListItem itemList={dbMenu.other} />
		</section>


	</MenuStyled>
)