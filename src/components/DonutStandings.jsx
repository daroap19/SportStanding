import { PieChart, Pie,  ResponsiveContainer, Tooltip, Legend, Cell} from "recharts";

export function DonutStandings({title, data, categories, index, colors}){


    const COLORS = ['#007bff', '#1885ba', '#184dba', '#3408c2', '#9c08c2', '#c20883', '#c2084f'];
   
    return(
        <div className='cont_bar'>
        <h2>{title}</h2>
        <ResponsiveContainer width="100%" height="90%">
            <PieChart >
                <Pie data={data.slice(0,7)} 
                dataKey={categories} 
                nameKey={index} 
                fill={colors} 
                outerRadius={100} 
                innerRadius={10}  
                labelLine={false} 
                label
                cx="50%"
                cy="50%">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip/>
                <Legend verticalAlign="top" align="center" />

            </PieChart>
        </ResponsiveContainer>       
        </div>
       
    )
}