import React from 'react';

export default (props) => {
        return (
            <div className="alert alert-warning">
                {props.alertInfo}
            </div>
        );
    };