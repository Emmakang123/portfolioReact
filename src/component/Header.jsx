import React from "react";

function Header(){
    const headerNav = [
        {
            title: "intro",
            url: "#intro",
        },
        {
            title: "skill",
            url: "#skill",
        },
        {
            title: "site",
            url: "#site",
        },
        {
            title: "portfolio",
            url: "#port",
        },
        {
            title: "contact",
            url: "#contact",
        },
    ];

    return <header id="header" role="banner">
        <div className="header__inner">
            <div className="header__logo">
                <a href="/">portfolio<em>react</em></a>
            </div>
            <nav className="header__nav" role="navigation" aria-label="main-menu">
                <ul>
                    {headerNav.map((nav,key)=>(
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="header_nav_mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded="false" role="button" tabIndex="0">
                <span></span>
            </div>
        </div>
    </header>
}
export default Header;