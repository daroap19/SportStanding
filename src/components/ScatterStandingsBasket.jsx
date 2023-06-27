import { Title } from '@tremor/react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ScatterStandingsBasket({categories, index, data, title}){

    return (
        <div>
            <h1>{title}</h1>
            <ResponsiveContainer width="100%" height={400}>
            <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey={index} name="Partidos Ganados"  unit="PG" />
                <YAxis yAxisId="left" type="number" dataKey={categories.pa}  name="Puntos Anotados" unit="PA" />
                <YAxis yAxisId="right" type="number" dataKey={categories.pe} name="Puntos Encajados"
                unit="PE"
                orientation="right"
                stroke="#82ca9d"
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter yAxisId="left"  name="Puntos Anotados" data={data} fill="#8884d8" line />
                <Scatter yAxisId="right" name="Puntos Encajados" data={data} fill="#82ca9d" line />
                <Legend verticalAlign="top" height={36}/>
            </ScatterChart>
            </ResponsiveContainer>
        </div>
       
      );
}
