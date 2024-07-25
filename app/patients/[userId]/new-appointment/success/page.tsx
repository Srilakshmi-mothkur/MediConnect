import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
    return (
        <div className='flex h-screen max-h-screen px-[5%]'>
            <div className='success-img'>
                <Link href="/">
                    <Image
                        src="/assets/icons/mediconnect-logo.png"
                        height={75}
                        width={75}
                        alt="MediConnect Logo"
                    />
                    <span className="text-3xl font-semibold">MediConnect</span>
                </Link>
            </div>
        </div>
    )
}

export default Success