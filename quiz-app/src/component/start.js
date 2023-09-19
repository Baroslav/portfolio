import {useDispatch, useSelector} from  "react-redux"


export const Start = () => {
    const dispatch = useDispatch()
    const open = useSelector(state => state.openQuiz)


    const openQuiz = () => {
        dispatch({type: "OPEN__QUIZ"})
    }
    return (
        <div className ="start">
            <button className="start__btn" onClick={()=>openQuiz()}>Почати</button>
        </div>
    )
}