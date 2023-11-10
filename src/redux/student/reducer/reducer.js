import {
  FETCH_ALL_EXAMS,
  FETCH_EXAM_PAPER,
  FETCH_PROFILE,
  SET_ANSWER_EDIT,
  SET_CURRENT_QUESTION_INDEX,
  SET_NAME_MODIFIED,
  SET_PROFILE_DATA,
  SET_REVIEW_STATUS,
  SET_SELECTED_ANSWERS,
} from "../constants";

const initialState = {
  allExamContainer: [],
  examPaperContainer: [],
  profileContainer: {
    name: "",
    email: "",
    role: "",
  },
  currentQuestionIndex: 0,
  selectedAnswers: {},
  isEdit: false,
  answerEdit: false,
  nameEdit: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_EXAMS:
      return {
        ...state,
        allExamContainer: [...action.payload],
      };
    case FETCH_EXAM_PAPER:
      return {
        ...state,
        examPaperContainer: [...action.payload],
      };
    case FETCH_PROFILE:
      return {
        ...state,
        profileContainer: action.payload,
      };
    case SET_CURRENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: action.payload,
      };

    case SET_SELECTED_ANSWERS:
      return {
        ...state,
        selectedAnswers: action.payload,
      };
    case SET_REVIEW_STATUS:
      return {
        ...state,
        isEdit: action.payload,
      };
    case SET_ANSWER_EDIT:
      return {
        ...state,
        answerEdit: action.payload,
      };
    case SET_NAME_MODIFIED:
      return {
        ...state,
        nameEdit: action.payload,
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        profileContainer: {
          ...state.profileContainer,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default reducer;
