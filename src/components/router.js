import { Routes, Route} from "react-router-dom";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Scatter from "./pages/Scatter";
import DataTable from "./pages/Table";
import NewData from "./pages/NewData";
import Main from "./pages/Main";


function Router () {
return (
        <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/bar" element={<Bar />}/>

        <Route exact path="/pie" element={<Pie />}/>

        <Route exact path="/scatter" element={<Scatter />} />

        <Route exact path="/newdata" element={<NewData />} />

        <Route exact path="/table" element={<DataTable/>} />

        <Route path="*" element={<Main />}/>

        </Routes>
);
}

export {Bar, Pie, Scatter, DataTable, NewData, Main, Router};