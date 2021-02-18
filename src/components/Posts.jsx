import React from "react";
import Post from "./Post";
import {connect, useSelector} from "react-redux";


const Posts = () => {
    const syncPosts = useSelector(state => state.posts.posts)
    if (!syncPosts.length) {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Поcтов нет</h5>
                </div>
            </div>
        )
    }
    return (
        <div>
            {syncPosts.map(el => {
                return <Post post={el}/>
            })}
        </div>
    )
}
export default Posts