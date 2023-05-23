import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            style={{ background: 'black', color: 'white', textAlign: 'center' }}
        >
            <div>
                <img
                    src="/path/to/logo.png"
                    alt="Logo"
                    style={{ width: '100px', height: '100px' }}
                />
            </div>
            <div>© {currentYear} Kasa. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
