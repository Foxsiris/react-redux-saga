import React from "react";
import {connect, useDispatch} from "react-redux";
import {createPost} from "../redux/actions";


function PostForm() {
    const [inputValue, setInputValue] = React.useState('')
    const dispacth = useDispatch()

    function submitHandler(e) {
        e.preventDefault()
        const newPost = {
            title: inputValue,
            id: Date.now().toString()
        }
        dispacth(createPost(newPost))
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

export default PostForm