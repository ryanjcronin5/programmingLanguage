import * as React from 'react';

import NavbarAccount from './components/NavbarAccount';
import Form from './components/LoginForm';

export default function Account() {
    return (
        <div className='px-6 lg:px-20 xl:px-36 bg-dark-500'>
            <NavbarAccount />
            <Form />
        </div>
    )
}