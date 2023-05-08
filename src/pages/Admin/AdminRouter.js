import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ALayout, Dashboard } from '@/pages/Admin';
import { User, UserAdd, UserEdit } from '@/pages/Admin/User';
import { Cocktail, CocktailEdit } from '@/pages/Admin/Cocktail';
import  Error from '@/_utils/Error';

const AdminRouter = () => {
    return (
        <div>
            <Routes>

                <Route element={ <ALayout/> }>
                    <Route path='dashboard' element={ <Dashboard/> } />
                    <Route path='user'>
                        <Route path='index' element={ <User/> } />
                        <Route path='add' element={ <UserAdd/> } />
                        <Route path='edit/:uid' element={ <UserEdit/> } />
                    </Route>
                    <Route path='cocktail'>
                        <Route path='index' element={ <Cocktail/> } />
                        <Route path='edit' element={ <CocktailEdit/> } />
                    </Route>
                    <Route path='*' element={ <Error/> } />
                </Route>

            </Routes>
        </div>
    );
};

export default AdminRouter;