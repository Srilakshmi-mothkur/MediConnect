import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
    const patient = await getPatient(userId);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[750px] flex-1 justify-between">
                    <div className="flex items-center py-5">
                        <Image
                            src="/assets/icons/mediconnect-logo.png"
                            height={75}
                            width={75}
                            alt="MediConnect Logo"
                        />
                        <span className="text-3xl font-semibold">MediConnect</span>
                    </div>

                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />
                    <p className="copyright mt-10 py-12">© 2024 MediConnect</p>
                </div>
            </section>

            <Image
                src="/assets/images/appointment-img.png"
                height={600}
                width={1500}
                alt="patient"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div>
    );
}
export default NewAppointment
