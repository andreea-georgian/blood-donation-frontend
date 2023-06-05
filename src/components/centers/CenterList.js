import CenterItem from "./CenterItem";
import { useState, useEffect } from "react";

function CenterList(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedCenters, setLoadedCenters] = useState([]);

    const url='http://localhost:8080/centers?county='+props.county;

    useEffect(() => {
        setIsLoading(true);
        fetch( url )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const centers = [];

            for (const key in data) {
                const center = {
                    id: key,
                    ...data[key]
                };

                centers.push(center);
                console.log(center);
            }

            setIsLoading(false);
            setLoadedCenters(centers);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <ul>
            {loadedCenters.map((center) => (
                <CenterItem
                    key={center.id}
                    id={center.id}
                    name={center.name}
                    timetable={center.timetable}
                    county={center.county}
                    capacity={center.capacity}
                    donorId={props.donorId}
                /> 
            ))}
        </ul>
    );
}

export default CenterList;