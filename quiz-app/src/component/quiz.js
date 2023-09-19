import { useDispatch, useSelector } from "react-redux"

export const Quiz =()=> {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)
    const step = useSelector(state => state.quizStep)
    const selectedVariant = useSelector(state => state.selectedVariant)
    
    const qustionStep = questions[step]

    const nextStep = (text,item) => {
        dispatch({type:"NEXT__STEP"})
        dispatch({type:"SELECT__VARIANT",payLoad: item})
        if(qustionStep.correct===text)
        {
            dispatch({type:"RIGHT__VARIANT"})
        }
        console.log(progresWidth)
    }
    
    const progresWidth = (100/questions.length) * step +"%"
    
    return (
        <div className="quiz">
            <span className="progress">
                <span style={{width : `${progresWidth}`}}></span>
            </span>
            <div>
                <h2 className="question__header">{step+1}) {qustionStep.question}</h2>
                <ul className="variants">
                    {
                        qustionStep.variants.map( (item,text) => (
                            <li key ={text} className="variant"
                            onClick={()=>nextStep(text,item)}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}   