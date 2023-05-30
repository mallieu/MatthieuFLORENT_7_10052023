import React from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MapList } from '../Helpers/Helpers';

const Menu = () => {
    const menuData = [
        {
            id: 1,
            text: 'Accueil',
            link: '/',
        },
        {
            id: 2,
            text: 'A propos',
            link: '/a-propos',
        },
    ];

    const MenuItem = ({ data }) => {
        const { text, link } = data;

        return (
            <NavLink to={link} activeclassname="active-link">
                {text}
            </NavLink>
        );
    };

    MenuItem.propTypes = {
        data: PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <nav className="header">
            <NavLink to="/" className="logo-link">
                <img src={logo} alt="logo-kasa" />
            </NavLink>
            <MapList data={menuData} isComponent component={MenuItem} />
        </nav>
    );
};

export default Menu;
