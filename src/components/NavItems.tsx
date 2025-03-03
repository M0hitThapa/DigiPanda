"use client"

import { PRODUCT_CATRGORIES } from "@/config"
import { useState } from "react"
import NavItem from "./NavItem"


const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    return<div className="flex gap-4 h-full">
{PRODUCT_CATRGORIES.map((category, i) => {
    const handleOpen = () => {
        if(activeIndex === i) {
            setActiveIndex(null)
        } else {
            setActiveIndex(i)
        }
    }

    const isOpen = i === activeIndex
    return(
        <NavItem />
    )
})}
    </div>
}

export default NavItems