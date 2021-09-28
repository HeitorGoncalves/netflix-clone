import styled from "styled-components";

export const Container = styled.div`

    .loading {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading img {
        max-width: 500px;
    }


`;