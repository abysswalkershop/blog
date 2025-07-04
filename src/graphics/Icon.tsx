import Image from 'next/image';
import React from 'react';

export const Icon = () => (
    <div>
        <Image
            width={64}
            height={64}
            src="/logo-square.png"
            alt="Logo"
            style={{
                maxHeight: '64px',
            }}
        />
    </div>
);