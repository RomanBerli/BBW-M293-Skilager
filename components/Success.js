import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaCheckCircle } from 'react-icons/fa';

export default function Success() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, [router]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <FaCheckCircle size={100} color="green" />
            <h1>Registration Successful</h1>
        </div>
    );
}
