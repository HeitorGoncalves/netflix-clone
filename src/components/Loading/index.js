import React from "react";

import { Container } from "./styles";
import load from "../../assets/load.gif";

export default () => {
    return(
        <Container>
            <div className="loading">
                <img src={load} alt="Carregando" />
            </div>
        </Container>
    );

}