import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
    href: string;
}

const Link: React.FC<LinkProps> = ({ children, href, ...props }) => {
    return (
        <NextLink href={href} passHref>
            <a {...props}>{children}</a>
        </NextLink>
    );
};

export default Link;
