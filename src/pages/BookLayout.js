import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export function BookLayout(){
    const [searchParams,setSearchParams] = useSearchParams({ n : 3})
    const number =searchParams.get("n")
    console.log(searchParams.get("n"))
    return(
        <>
        <Link to="/book/1">Book 1 <br/> </Link> <br/>
        <Link to="/book/2">Book 2 <br/> </Link> <br/>
        <Outlet context={{obj:"Router App"}}/>
        <input type="number" 
        value={number}
        onChange={e => setSearchParams({n: e.target.value})}
        />
        </>
    )}