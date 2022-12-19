import React from "react";

import SubHeaderContainer from "./sub_header_container";
import SearchHeaderContainer from "./search/search_header_container";
import { Navigate, Route, Routes } from "react-router-dom";
import DMHeader from "./dm_header";


const MainHeader = props => (
    <div className="mainpage-head">
        <SearchHeaderContainer path={ props.location.pathname } />
        <Routes>
            <Route path="/c/:id" component={SubHeaderContainer} />
            <Route path="/d/:id" component={DMHeader} />
            <Route path="/new-dm" render={
                () => (
                    <div className="sub-header">
                        <div className="location-info dm">New Message</div>
                    </div>
                )
            }/>
        </Routes>
    </div>
)


export default MainHeader