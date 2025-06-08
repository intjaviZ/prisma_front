import { useEffect, useState } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const DispersionChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simular fetch real
                // const response = await fetch('https://api.tu-backend.com/valores');
                // const valores = await response.json();

                const valores = [4, 16, 40, 70, 90]; // Mocks

                // Transforma: [4, 16, 40] → [{ x: 1, y: 4 }, { x: 2, y: 16 }, ...]
                const transformed = valores.map((valor, index) => ({
                    x: index + 1,
                    y: valor
                }));

                setData(transformed);
            } catch (error) {
                console.error('Error al cargar los datos', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-96">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="x"
                        label={{ value: 'Test realizados', position: 'insideBottom', offset: -5 }}
                        allowDecimals={false}
                    />
                    <YAxis
                        label={{ value: 'Evaluaciones', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="y"
                        stroke="#00bcd4"
                        strokeWidth={2}
                        dot={{ r: 5 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}

export default DispersionChart;