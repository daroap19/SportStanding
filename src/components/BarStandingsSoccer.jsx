import { BarChart, Card, Title} from "@tremor/react";   


export function BarStandingsSoccer({data, index, categories, title, colors}){

    return (
        <>
        <Card>
            <Title>{title}</Title>
            <BarChart data={data}
            categories={categories}
            colors={colors}
            index={index}
            showLegend={true}
            />
        </Card>
       </>
    )
}