import RegisterForm from "@/components/forms/RegisterForm"
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image"
import Link from "next/link"

const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                    <div className="flex items-center py-5">
                        <Image
                            src="/assets/icons/mediconnect-logo.png"
                            height={75}
                            width={75}
                            alt="MediConnect Logo"
                        />
                        <span className="text-3xl font-semibold">MediConnect</span>
                    </div>

                    <RegisterForm user={user} />

                    <p className="copyright py-12">© 2024 MediConnect</p>

                </div>
            </section>

            <Image
                src="/assets/images/onboarding-img.png"
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[50%]"
            />
        </div>
    )
}

export default Register