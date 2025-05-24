import React from 'react';
import { useEffect } from 'react';
const ErrorPage = () => {
    useEffect(() => {
        document.title = "ErrorPage"; // Set the title dynamically
      }, []);
    return (
        <div>
            <h3>404- Page is Not Found</h3>
        </div>
    );
};

export default ErrorPage;