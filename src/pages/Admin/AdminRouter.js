import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ALayout, Dashboard } from '@/pages/Admin';

const AdminRouter = () => {
    return (
        <div>
            <Routes>

                <Route element={ <ALayout/> }>
                    <Route path='dashboard' element={ <Dashboard/> } />
                </Route>

            </Routes>
        </div>
    );
};

export default AdminRouter;