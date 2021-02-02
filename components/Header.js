import headerStyle from "../styles/Header.module.css"

import React from 'react'

export default function Header() {
    const x=1
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDevs</span> News
            </h1>
            <style jsx>
                {`
                    .title{
                        color:${x>3 ? 'red':'blue'};
                    }
                `}
            </style>
        </div>
    )
}
