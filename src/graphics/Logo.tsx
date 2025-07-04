import Image from 'next/image';
import React from 'react';

export const Logo = () => (
    <div>
        <Image
            width={200}
            height={200}
            src="/logo-square.png"
            alt="Logo"
            style={{
                maxHeight: '200px',
                margin: 'auto',
            }}
        />
    </div>
);