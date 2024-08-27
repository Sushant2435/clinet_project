import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';
import Tagbar from './Tagbar';

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SUCCESS':
            return { ...state, Products: payload, loading: false };
        case 'ERROR':
            return { ...state, loading: false, error: true };
        default:
            return state;
    }
};

const initialState = {
    loading: true,
    Products: [],
    error: false,
};

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { Products } = state;
    const [categoryData, setCategoryData] = useState([]);
    const [menulist, setMenulist] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json');
                dispatch({ type: 'SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'ERROR' });
            }
        })();
    }, []);

    useEffect(() => {
        if (!state.loading && !state.error) {
            setCategoryData(Products);


            const uniqueList = [
                'All',
                ...new Set(
                    Products.map((curElem) => curElem.tag)
                )

            ];
            setMenulist(uniqueList);
        }
    }, [Products, state.loading, state.error]);

    const filterItem = (category) => {
        if (category === 'All') {
            setCategoryData(Products);
            return;
        }
        const updatedList = Products.filter((curElem) => curElem.tag === category);
        setCategoryData(updatedList);
    };

    return (
        <>
            <Tagbar filterItem={filterItem} NavList={menulist} />
            <Card product={categoryData} />
        </>
    );
};

export default Home;
