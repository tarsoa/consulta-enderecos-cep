import React from 'react';
import { Chart } from 'primereact/chart';

const GraficoPizza = ({ chartData }) => {
    return (
        <div className="flex justify-content-center">
            <Chart type="pie" data={chartData} />
        </div>
    );
}

export default GraficoPizza;
