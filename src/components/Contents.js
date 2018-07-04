import React from 'react';

const Contents = (props) => {
    return (
        <div>
            Contents {props.match.params.title}
        </div>
    );
}

export default Contents;