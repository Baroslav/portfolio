import {legacy_createStore} from "redux"
import { quiz_reducer } from "./quizReducer"

export const store = legacy_createStore(quiz_reducer)