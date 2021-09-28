import React, { Component, useEffect, useState } from "react";

import Tmdb from "../../services/Tmdb";
import { Container } from "./styles";
import Header from "../../components/Header";
import FeaturedMovie from "../../components/FeaturedMovie";
import MovieRows from "../../components/MovieRows";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";



export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState(null);
    const [blackHeader, setblackHeader] = useState(false);

    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
            setMovieList(list);

            let originals = list.filter(i=>i.slug === 'originals');
            let randomClosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
            let closen = originals[0]. items.results[randomClosen];
            let closenInfo = await Tmdb.getMovieInfo(closen.id, 'tv');
            setFeaturedData(closenInfo);
        }
    
        loadAll();
    },[]);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setblackHeader(true);
            } else {
                setblackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    },[]);


    return (
        
        <Container>
            <div className="page">

                <Header black={blackHeader} />

                { featuredData && 
                    <FeaturedMovie item={featuredData} />
                 }
                <div className="lists">
                    {movieList.map((item, key)=>(
                        <div>
                            <MovieRows key={key} title={item.title} items={item.items} />
                        </div>
                    ))}
                </div>

                <Footer />

                {movieList <= 0 && 
                    <Loading />
                }

            </div>
        </Container>
       
    );

}