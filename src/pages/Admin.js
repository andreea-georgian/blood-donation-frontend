import { useState, useEffect } from 'react';

import DoctorList from '../components/doctors/DoctorList';
import AddDoctor from '../components/doctors/AddDoctor';

function AdminPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedDoctors, setLoadedDoctors] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'http://localhost:8080/doctors',
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const doctors = [];

            for (const key in data) {
                const doctor = {
                    id: key,
                    ...data[key]
                };

                doctors.push(doctor);
                console.log(doctor);
            }

            setIsLoading(false);
            setLoadedDoctors(doctors);
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
        <div>
            <section>
                <h1>All doctors</h1>
                <DoctorList doctors={loadedDoctors} />
            </section>
            <section>
                <h1>Add doctor</h1>
                <AddDoctor/>
            </section>
        </div>
    )
}

export default AdminPage;