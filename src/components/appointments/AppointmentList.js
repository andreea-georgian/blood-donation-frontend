import ReactPaginate from "react-paginate";
import AppointmentItem from "./AppointmentItem";
import { useState, useEffect } from 'react';

function AppointmentList(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedAppointments, setLoadedAppointments] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 1;
    const offset = currentPage * PER_PAGE;
    const currentPageData = loadedAppointments.slice(offset, offset + PER_PAGE);
    const pageCount = Math.ceil(loadedAppointments.length / PER_PAGE);

    useEffect(() => {
        setIsLoading(true);
        fetch( props.url )
        .then((response) => {
            return response.json();
        }).then((data) => {
            const appointments = [];

            for (const key in data) {
                const appointment = {
                    id: key,
                    ...data[key]
                };

                appointments.push(appointment);
            }

            setIsLoading(false);
            setLoadedAppointments(appointments);
        });
    }, []);

    function pageClickHandler({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <ul>
            {currentPageData.map((appointment) => (
                <AppointmentItem
                    key={appointment.id}
                    id={appointment.id}
                    donor={appointment.donor}
                    doctor={appointment.doctor}
                    center={appointment.center}
                    confirmed={appointment.confirmed}
                    date={appointment.date}
                    buttonText={props.buttonText}
                    itemUrl={props.itemUrl}
                />
            ))}
            <ReactPaginate
                breakLabel='...'
                nextLabel='next'
                previousLabel='previous'
                onPageChange={pageClickHandler}
                pageCount={pageCount}
            />
        </ul>
    );
}

export default AppointmentList;