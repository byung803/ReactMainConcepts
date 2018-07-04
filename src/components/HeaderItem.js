import React from 'react';
import { Link } from 'react-router-dom';

const HeaderItem = (props) => {
    return (
        <div>
            <Link to={`/contents/${props.item}`}>{`${props.item}`}</Link>
        </div>
    );
}

export default HeaderItem;