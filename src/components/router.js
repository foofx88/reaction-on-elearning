import { Routes, Route} from "react-router-dom";
import BarChart from "./pages/Bar";
import Donut from "./pages/Donut";
import ScatterPlot from "./pages/Scatter";
import DataTable from "./pages/Table";
import NewData from "./pages/NewData";
import Main from "./pages/Main";


function Router () {
return (
        <Routes>
        <Route exact path="/roe" element={<Main />} />

        <Route exact path="/roe/bar" element={<BarChart />}/>

        <Route exact path="/roe/donut" element={<Donut />}/>

        <Route exact path="/roe/scatter" element={<ScatterPlot />} />

        <Route exact path="/roe/newdata" element={<NewData />} />

        <Route exact path="/roe/table" element={<DataTable/>} />

        <Route path="*" element={<Main />}/>

        </Routes>
);
}

export {BarChart, Donut, ScatterPlot, DataTable, NewData, Main, Router};