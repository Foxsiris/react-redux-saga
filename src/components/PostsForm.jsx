import React from "react";
import {connect} from "react-redux";
import {createPost} from "../redux/actions";


function PostForm({createPost}) {
    const [inputValue, setInputValue] = React.useState('')

    function submitHandler(e) {
        e.preventDefault()
        const newPost = {
            title: inputValue,
            id: Date.now().toString()
        }
        createPost(newPost)
        setInputValue('')
    }

    function inputHandler(e) {
        setInputValue(e.target.value)
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" className="form-control" id="title" value={inputValue} onChange={inputHandler}/>
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createPost: createPost
}

export default connect(null, mapDispatchToProps)(PostForm)