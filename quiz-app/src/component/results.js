import { useSelector } from "react-redux"

export const Results = () => {
    const questions = useSelector(state => state.questions)
    const selectedVariant = useSelector(state => state.selectedVariant)
    
    return ( 
        <div className="results">
            {questions.map((item,text) =>(
                <div className="results__item">
                    <h2 key ={text}>{text+1+"."+item.question}</h2>
                    <ul className="res__variants">
                        {
                            item.variants.map((i,t)=>(
                                <li
                                style={{backgroundColor : item.correct==t ? "rgb(9, 136, 5)" : "rgb(177, 6, 6)"}}
                                 className="res__variant">
                                    {i}
                                </li>
                            ))
                        }
                    </ul>
                    <p className="answer">Ваша відповідь : {selectedVariant[text]}</p>
                </div>
            ))}
        </div>
    )
}