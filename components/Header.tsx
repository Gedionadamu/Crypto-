"use client";
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const Header = () => {
    const pathname = usePathname();
    return (
        <div className="main-container inner">
            <header>
            <Link href="/">
                <Image src="/Logo.svg" alt="example" width={132} height={40} />
            </Link>
                <nav>
                    <Link href="/" className={cn( 'nav-link', {"is-active":pathname==="/","is-home":true})}>Home</Link>
                    <p>Search Modal</p>
                    <Link href="/coins" className={cn( 'nav-link', {"is-active":pathname==="/coins"})}>All Coins</Link>
                </nav>
            </header>
        </div>

    )
}
export default Header
