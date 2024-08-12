import StatCard from '@/components/StatCard'
import { getRecentAppointmentList } from '@/lib/actions/appointment.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Admin = async () => {
    const appointments = await getRecentAppointmentList()
    
    return (
        <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
            <header className='admin-header flex items-center justify-between w-full'>
                <Link href="/" className='cursor-pointer'>
                    <div className="flex items-center">
                        <Image
                            src="/assets/icons/mediconnect-logo.png"
                            height={60}
                            width={60}
                            alt="MediConnect Logo"
                        />
                        <span className="text-2xl font-semibold">MediConnect</span>
                    </div>
                </Link>
                <p className='text-16 font-semibold ml-auto'>Admin Dashboard</p>
            </header>

            <main className='admin-main'>
                <section className='w-full sapce-y-4'>
                    <h1 className='header'>Welcome 👋</h1>
                    <p className='text-dark-700'>Start the day with managaing new appointments</p>
                </section>

                <section className='admin-stat'>
                    <StatCard
                        type="appointments"
                        count={appointments.scheduledCount}
                        label="Scheduled appointments"
                        icon="/assets/icons/appointments.svg"
                    />

                    <StatCard
                        type="pending"
                        count={appointments.pendingCount}
                        label="Pending appointments"
                        icon="/assets/icons/pending.svg"
                    />

                    <StatCard
                        type="cancelled"
                        count={appointments.cancelledCount}
                        label="Cancelled appointments"
                        icon="/assets/icons/cancelled.svg"
                    />
                </section>
            </main>
        </div>
    )
}

export default Admin