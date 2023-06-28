import { Title } from '@tremor/react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function ScatterStandings({categories, index, data, title, color}){

    
    return (
        <div className='cont_bar'>
        <h2>{title}</h2>
            <ResponsiveContainer width="100%" height="90%">
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
                <Scatter yAxisId="left"  name="Puntos Anotados" data={data} fill={color.uno} line />
                <Scatter yAxisId="right" name="Puntos Encajados" data={data} fill={color.dos} line />
                <Legend verticalAlign="top" height={36}/>
            </ScatterChart>
            </ResponsiveContainer>
        </div>
       
      );
}
