import React from "react";
import ReactDOM from "react-dom";
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import {
  VictoryChart,
  VictoryStack,
  VictoryGroup,
  VictoryArea,
  VictoryPortal,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme
} from "victory";




function App() {
  return (
    <div className="App">
      <div>

        <div className="chart-areea">
          <h2>Victory</h2>
          <div className="victory-chart">
            <VictoryChart >
              <VictoryStack colorScale={["#005aff50"]}>
                <VictoryGroup
                  data={[
                    { x: 100, y: 0 },
                    { x: 170, y: 3.8 },
                    { x: 300, y: 1 },
                    { x: 400, y: 0 }
                  ]}
                >
                  <VictoryArea
                    style={{

                    }}
                    interpolation="natural"
                  />
                </VictoryGroup>
              </VictoryStack>

              <VictoryAxis
                style={{
                  axis: {
                   
                  },
                  ticks: {
                    size: 15,
                    stroke: "black",
                    strokeOpacity: 0.2,
                    strokeDasharray: "5, 5"
                  },
                  grid: {
                    stroke: ({ tick, index }) => {
                      if (index == 5) {
                        return "#00000000"
                      }
                      return 'rgba(0, 0, 0, 0.2)';
                    }
                    ,
                    strokeWidth: 1,
                    strokeDasharray: "5, 5"
                  },
                  tickLabels: {
                    fontSize: "9px",
                    fontFamily: "inherit",
                    fillOpacity: 1,

                  },
                  axisLabel: {
                    fontsize: 13
                  }
                }}
              />
              <VictoryAxis
                dependentAxis
                label="Audience Size"
                style={{
                  axis: {
                  },
                  ticks: {

                  },
                  grid: {
                    display: "none"
                  },
                  tickLabels: {
                    display: "none"

                  },
                  axisLabel: {
                    fontsize: 13
                  }
                }}
              />
            </VictoryChart>
            <svg className="test-svg">
              <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="yellow" />
                  <stop offset="100%" stopColor="red" />
                </linearGradient>
              </defs>
              <rect
                x="10"
                y="10"
                width="100%"
                height="10"
                fill="url(#linear)"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;


/*
 <div className="chart-area">
          <AreaChart width={730} height={250} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" points={[
              { x: 1.4, y: 2, y0: 0 },
              { x: 2.2, y: 3, y0: 1 },
              { x: 3, y: 5, y0: 1 },
              { x: 4, y: 4, y0: 2 },
              { x: 5, y: 6, y0: 2 }
            ]} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>


        
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]



        */