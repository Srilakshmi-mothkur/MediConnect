"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import { SubmitButton } from "../SubmitButton"
import { useState } from "react"
import { userFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const PatientForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    const form = useForm<z.infer<typeof userFormValidation>>({
        resolver: zodResolver(userFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",

        },
    })

    async function onSubmit({ name, email, phone}: z.infer<typeof userFormValidation>) {
        setIsLoading(true);
        try{
            // const userData = {name, email, phone}
            // const user = await createUser(userData);
            // if(user) router.push(`/patients/${user.$id}/register`)
        }catch(error){
            console.log(error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <p className="text-dark-700">Schedule your first appointment</p>
                </section>

                <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                label="Full Name"
                placeholder="Srilakshmi Mothkur"
                iconSrc="/assets/icons/user.svg"
                iconAlt="user"
                />

                <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                label="Email"
                placeholder="srilakshmii.mothkur@gmail.com"
                iconSrc="/assets/icons/email.svg"
                iconAlt="email"
                />

                <CustomFormField
                fieldType={FormFieldType.PHONE_INPUT}
                control={form.control}
                name="phone"
                label="Phone Number"
                placeholder="+{91} 9654827812"
                />
                
                <SubmitButton isLoading={isLoading}>
                    Get Started 
                </SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm