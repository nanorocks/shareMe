import { Routes, Route } from "react-router-dom";
import React from 'react'
import { routeMapper } from "@routes/.";
import { AuthMiddleware } from "@middleware/_index";
import { IRoute } from '@interfaces/_index'
import Navbar from "@views/organisms/Navbar";

type Props = {
    children: React.ReactNode
}

export default function Router(props: Props) {
    return (
        <>
            <Routes>
                {routeMapper.map((item: IRoute, index: number) => {
                    return (
                        <Route path={item.routeName} key={index} element={
                            <>
                                <AuthMiddleware item={item}>
                                    <>
                                        {item.isAuth && <Navbar />}
                                        {item.page}
                                    </>            
                                </AuthMiddleware>
                            </>
                        } />
                    )
                })}
            </Routes>
        </>
    )
}