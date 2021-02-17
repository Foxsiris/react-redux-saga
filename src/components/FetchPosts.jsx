import React from "react";


export default function FetchPosts({posts}){
    if (!posts.length){
        return <button className="btn btn-primary">Загрузить</button>
    }
    return(
        <div>
            <input type="text"/>
        </div>
    )
}