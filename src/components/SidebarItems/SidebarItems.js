import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import './SidebarItems.css';

const sidebarItems = () => (
    <div className="sidebar">
        <ul className="list">
            <SidebarItem link='https://www.amazon.com/Scott-Sheets-Toilet-Paper-Tissue/dp/B01N5K71NJ/ref=sr_1_4_0o_na?crid=2O30RD3UFC27J&dchild=1&fpw=fresh&keywords=scott+toilet+paper&qid=1586204231&sprefix=scott%2Caps%2C143&sr=8-4'>Scotts</SidebarItem>
            <SidebarItem link='https://www.amazon.com/Quilted-Northern-Ultra-Strong-Toilet-Regular/dp/B018AD00BM/ref=sr_1_1?crid=2RP2T5VMCF6NC&dchild=1&fpw=fresh&keywords=charmin+toilet+paper+ultra+soft+mega+roll&qid=1586204264&s=amazonfresh&sprefix=charmin+%2Camazonfresh%2C157&sr=1-1'>Charmin</SidebarItem>
            <SidebarItem link='https://www.amazon.com/Cottonelle-ComfortCare-Toilet-Tissue-Double/dp/B07BX3LXFZ/ref=sr_1_2?crid=2RP2T5VMCF6NC&dchild=1&fpw=fresh&keywords=charmin+toilet+paper+ultra+soft+mega+roll&qid=1586204295&s=amazonfresh&sprefix=charmin+%2Camazonfresh%2C157&sr=1-2'>Cottonelle</SidebarItem>
        </ul>
    </div>
);

export default sidebarItems;