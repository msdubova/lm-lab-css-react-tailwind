import { propertyData } from "../data/data"
import { Card } from "./card"

export const PropertiesDisplay = () => {

    console.log(propertyData.length)
    return (
        <>
            <ul className="flex flex-col">
                {propertyData.map((p) => <Card property={p} />)}
            </ul>
        </>
    )
}