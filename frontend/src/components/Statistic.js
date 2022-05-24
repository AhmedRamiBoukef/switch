import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
function Statistic(props) {
  //const demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';
  //   const data = [
  //     { name: 'CISCO 1', value: 400 },
  //     { name: 'CISCO 2', value: 300 },
  //     { name: 'CISCO 3', value: 300 },
  //     { name: 'CISCO 4', value: 200 },
  //   ];
  const [data, SetData] = useState([]);
  const [data2, SetData2] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/type", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetData(data);
      });

    fetch("http://localhost:5000/vlans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": Cookies.get("jwt"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        SetData2(data);
      });
  }, []);

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      count,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.vlan}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${count} Ports`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {/* {`(Nombre de ports ${(percent * 100).toFixed(0)})`} */}
        </text>
      </g>
    );
  };

  const renderActiveShape2 = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      count,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.vlan}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`${count} Ports`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {/* {`(Nombre de ports ${(percent * 100).toFixed(0)})`} */}
        </text>
      </g>
    );
  };

  const [activeIndex, setactiveIndex] = useState(0);
  const [activeIndex2, setactiveIndex2] = useState(0);

  const onPieEnter = (_, index) => {
    setactiveIndex(index);
  };

  const onPieEnter2 = (_, index) => {
    setactiveIndex2(index);
  };

  return (
    <div className="flex overflow-hidden">
      <Navbar />
      <div style={{ height: "100vh" }} className="w-full">
        <SideBar
          image="./../images/image01.png"
           nom={props.user2.name}
          titre="Statistiques"
        ></SideBar>
        <div
          style={{ height: "100vh" }}
          className="p-6   flex justify-center items-center w-full "
        >
          <div className=" m-4  shadow-lg rounded-md border-solide border-2 ">
             
             
            <PieChart width={600} height={400}>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#0080ff"
                dataKey="count"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
            <div className="w-full felx justify center mb-4 p-2">
              <h1 className=" text-center text-xl font-bold">Le nombre des Ports pour chaque type de port</h1>
              </div>
          </div>

          <div className=" m-4  shadow-lg rounded-md border-solide border-2 ">
            <PieChart width={600} height={400}>
              <Pie
                activeIndex={activeIndex2}
                activeShape={renderActiveShape2}
                data={data2}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={120}
                fill="#0080ff"
                dataKey="count"
                onMouseEnter={onPieEnter2}
              />
            </PieChart>
            <div className="w-full felx justify center mb-4 p-2">
              <h1 className=" text-center text-xl font-bold">Le nombre des Ports pour chaque Vlan</h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Statistic;
