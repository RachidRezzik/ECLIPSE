import React from 'react'

export default function Search(props) {    
    return (
        <div className={props.searchOpen ? "search_container active" : "search_container"}>
            <input type="text" placeholder="Search ECLIPSE Products..."/>
        </div>
    )
}
