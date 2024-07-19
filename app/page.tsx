import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center">
            <Image
              src="/assets/icons/mediconnect-logo.png"
              height={75}
              width={75}
              alt="MediConnect Logo"
            />
            <span className="text-3xl font-semibold">MediConnect</span>
          </div>

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2024 MediConnect</p>

            <Link href="/?admin=true" className="text-green-500">
            Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/home-image.avif"
        height={600}
        width={1100}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
