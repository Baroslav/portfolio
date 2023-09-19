import { useDispatch, useSelector } from "react-redux"

export const Finish = () => {
    const right =useSelector(state =>state.right)
    const questions = useSelector(state =>state.questions)
    const openRes = useSelector(state => state.openResult)
    const dispatch = useDispatch()
    console.log(openRes)

    const openResult = () => {
        dispatch({type:"OPEN__RESULTS"})
    }
    return (
        <div className="finish">
            <h2>Ви відповіли на {right}/{questions.length}</h2>
            <button className="finish__btn" onClick={()=>openResult()}>
                Переглянути результат
            </button>
        </div>
    )
}