import React from 'react';

const sidebarItem = (props) => (
    <li>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default sidebarItem;