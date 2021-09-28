import styled from "styled-components";

export const Container = styled.div`

    margin-bottom: 30px;

    h2 {
        margin: 0px 0px 0px 30px;
    }

    .movieRow--listarea {
        overflow-x: hidden;
        padding-left: 30px;
    }

    .movieRow--list {
        transition: all ease 0.5s;
    }

    .movieRow--item {
        display: inline-block;
        width: 150px;
        cursor: pointer;
    }

    .movieRow--item img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    .movieRow--item img:hover {
        transform: scale(1);
    }

    .movieRow--left, 
    .movieRow--right {
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    .movieRow--left {
        left: 0;
    }

    .movieRow--right {
        right: 0;
    }
    
    .movieRow:hover .movieRow--left,
    .movieRow:hover .movieRow--right {
        opacity: 1;
    }


    @media (max-width: 760px) {
        .movieRow--left,
        .movieRow--right {
            opacity: 1;
        }
    }

`;