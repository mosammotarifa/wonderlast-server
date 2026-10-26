import UserFrom from '@/component/UserFrom';
import { createUser } from '@/lib/action';
import React from 'react';

const Userpage = () => {
    return (
        <div>
            <UserFrom createUser ={createUser}/>
        </div>
    );
};

export default Userpage;