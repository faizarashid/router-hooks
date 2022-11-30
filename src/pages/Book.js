import React from "react";
import {  useParams } from "react-router-dom";

export  function Book() {
    const { id } =useParams()
    // const obj = useOutletContext()
    return <h1>Book {id} </h1>;}