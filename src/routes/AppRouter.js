import React from 'react';
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { NotRequireAuth } from '../helpers/NotRequireAuth';
import { RequireAuth } from '../helpers/RequireAuth';
import { Login } from '../pages/Login';
import { Private1 } from '../pages/Private/Private1';
import { Private2 } from '../pages/Private/Private2';
import { Private3 } from '../pages/Private/Private3';
import { Private4 } from '../pages/Private/Private4';
import { Page404 } from '../pages/Public/Page404';
import { Public1 } from '../pages/Public/Public1';

export const AppRouter = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log(lastPath);

    return (
        <HashRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={ 
                        <NotRequireAuth>
                            <Public1 />
                        </NotRequireAuth>
                    } 
                >    
                </Route>
                <Route 
                    path="/home/*" 
                    element={ 
                        <RequireAuth>
                            <Outlet />
                        </RequireAuth> 
                    } 
                >
                    <Route 
                        path=""
                        element={ 
                            <>
                                <Private1 />
                                <Footer /> 
                            </>
                        } 
                    />
                    <Route 
                        path="subPriv"
                        element={
                            <>
                                <NavBar />
                                <Outlet />
                                
                            </>
                        } 
                    >
                        <Route 
                            index
                            element={
                                <Private2 /> 
                            } 
                        /> 
                        <Route 
                            path="subPriv1"
                            element={
                                <Private3 /> 
                            } 
                        /> 
                        <Route 
                            path="subPriv2"
                            element={
                                <Private4 /> 
                            } 
                        /> 
                    </Route>
                </Route>
                <Route 
                    path="/login" 
                    element={
                        <NotRequireAuth>
                            <Login />
                        </NotRequireAuth>
                    } 
                />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </HashRouter>
    )
}
