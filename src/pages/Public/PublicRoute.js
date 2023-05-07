import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/pages/Public/Layout';
import Error from '@/_utiles/Error';
import Home from '@/pages/Public/Home';
import Service from '@/pages/Public/Service';
import Contact from '@/pages/Public/Contact';

const PublicRoute = () => {
    return (
        <div>
             <Routes>

                <Route element={ <Layout/> }>

                    <Route index element={ <Home/> } />
                    <Route path='/home' element={ <Home/> } />
                    <Route path='/service' element={ <Service/> } />
                    <Route path='/contact' element={ <Contact/> } />
                    <Route path='*' element={ <Error/> } />

                </Route>

            </Routes>
        </div>
    );
};

export default PublicRoute;