import DoctorItem from "./DoctorItem";

function DoctorList(props) {
    return (
        <ul>
            {props.doctors.map((doctor) => (
                <DoctorItem
                    key={doctor.id}
                    id={doctor.id}
                    firstName={doctor.firstName}
                    lastName={doctor.lastName}
                    email={doctor.email}
                    donationCenterId={doctor.donationCenterId}
                    donationCenterName={doctor.donationCenterName}
                />
            ))}
        </ul>
    );
}

export default DoctorList;