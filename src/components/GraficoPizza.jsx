import React from 'react';
import { Chart } from 'primereact/chart';

const GraficoPizza = ({ graficoData }) => {
    return (
        <div className="flex justify-content-center">
            <Chart type="pie" data={graficoData} />
        </div>
    );
}

export default GraficoPizza;
