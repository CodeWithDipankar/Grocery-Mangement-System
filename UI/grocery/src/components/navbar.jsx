import React, { useState } from "react";
import '../style/navBar.css'

function Navbar(){
    const [navItems, setNavItems] = useState(['Home','Categories','Login'])
    console.log(navItems)
    return(
        <div className='navbar'>
            {
                navItems.map((a,i)=>{
                    return(
                        <div>
                            {a}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Navbar;