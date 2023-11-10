import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>

            <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
                style={{
                    backgroundColor: "rgba(100, 85, 200 )",
                    borderRadius: "5px",
                    fontSize: "17px",
                    fontWeight: '500',
                    padding: "6px 18px",
                    color: 'white',
                    cursor: "pointer"
                }}>
                Sign Up with Google account
            </button>

        </div>
    );
};

export default Signup;
