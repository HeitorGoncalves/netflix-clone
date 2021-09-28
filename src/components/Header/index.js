import React from "react";

import { Container } from "./styles";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";

export default ({black}) => {
    return(
        <Container>
            <header className={ black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src={logo} />
                    </a>
                </div>
                <div className="header--user">
                <a href="/">
                        <img src={avatar} />
                    </a>
                </div>
            </header>
        </Container>
    );
}