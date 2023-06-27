import { PieChart, Pie,  ResponsiveContainer, Tooltip, Legend, Cell} from "recharts";

export function DonutStandingsBasket({title, data, categories, index, colors}){


    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF8170', '#A41130'];
   
    return(
        <div>
         <h1>{title}</h1>
        <ResponsiveContainer width="100%" height={400}>
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