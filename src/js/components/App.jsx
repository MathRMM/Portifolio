import { Routes, Route } from "react-router";

import './globalStyles.css'
import MainPage from './mainPage/MainPage';

export default function App (){

    return(
        <Routes>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    )
}