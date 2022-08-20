import Chart from "react-apexcharts";

export default (props) => {
    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart
                        options={props.options}
                        series={props.series}
                        type="pie"
                        width="300px"
                    />
                </div>
            </div>
        </div>
    );
}