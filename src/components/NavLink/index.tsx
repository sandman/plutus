import React from 'react';
import Link from 'next/link';
import cx from 'classnames';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface NavLinkProps {
    name: string;
    href: string;
    icon: IconProp;
    bottomBorder?: boolean;
}

const NavLink = ({ name, href, icon, bottomBorder = true }: NavLinkProps) => {
    const router = useRouter();
    const borderClass = bottomBorder ? 'border-b-4' : 'border-l-4';
    return (
        <Link href={href} className={cx('!rounded-none', { [ `${borderClass} border-primary`]: router.pathname === href } )}>
            <span className='text-left'><FontAwesomeIcon icon={icon} /></span>
            <span className='mx-2 text-sm font-normal'>{name} </span>
        </Link>
    );
};

export default NavLink;