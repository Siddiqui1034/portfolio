import { usePathname } from "next/navigation"
import React from "react"
import Link from "next/link"

const NavLink = ({link}) => {
   const pathName = usePathname()
  return (
    <div>
        <Link href={link.url} key={link.title} className={`rounded-md p-2 ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
    </div>
  )
}

export default NavLink
