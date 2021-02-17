import React from "react";
import Post from "./Post";
import {connect} from "react-redux";


const Posts = ({syncPosts}) => {
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

const mapStateToProps = state => {
    return {
        syncPosts:state.posts.posts
    }
}
export default connect(mapStateToProps)(Posts)