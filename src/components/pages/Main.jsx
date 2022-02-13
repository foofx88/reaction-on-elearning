
import LiquidPlot from "./Liquid";
import ScatterPlot from "./Scatter";
import { Card } from 'antd';
import Donut from "./Donut";

function Main() {

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  return (
    <Card >
    <Card.Grid style={gridStyle}><LiquidPlot/></Card.Grid>
    <Card.Grid style={{width:'75%'}}><ScatterPlot/></Card.Grid>

  </Card>
  );
}

export default Main;
