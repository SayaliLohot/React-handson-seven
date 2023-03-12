import {
    ADD_NEW_STUDENT,
    DELETE_STUDENT_DETAIL,
    GET_STUDENT_DETAILS,
    UPDATE_STUDENT_DETAIL,
  } from "../Actions/StudentActions";
  
  const inititalState = {
    studentList: [
        // {
        //     name: "Sayali",
        //     age: "21",
        //     course: "MEANNNN",
        //     batch: "October",
        // },
        // {
        //     name: "shruti",
        //     age: "22",
        //     course: "MERN",
        //     batch: "Nov",
        // },
        // {
        //     name: "sameer",
        //     age: "24",
        //     course: "MEANNNN",
        //     batch: "October",
        // },
        // {
        //     name: "shree",
        //     age: "25",
        //     course: "MERN",
        //     batch: "Nov",
        // }
    ],
    specificStudentDetails: {},
  };
  
  const StudentReducer = (state = inititalState, action) => {
    switch (action.type) {
      case ADD_NEW_STUDENT: {
        console.log("ADD_NEW_STUDENT reducer", state, action);
        return { ...state, studentList: [...state.studentList, action.payload] };
      }
      case GET_STUDENT_DETAILS: {
        return { ...state };
      }
      case UPDATE_STUDENT_DETAIL: {
        console.log("UPDATE_STUDENT_DETAIL reducer", state, action);
        const updatedStudentList = state.studentList.map((item) => {
          if (item?.id === action?.payload?.id) {
            return action?.payload;
          }
          return item;
        });
        return { ...state, studentList: updatedStudentList };
      }
      case DELETE_STUDENT_DETAIL: {
        console.log("DELETE_STUDENT_DETAIL reducer", state, action);
        const updatedStudentList = state.studentList.filter(
          (item) => item?.id !== action?.payload
        );
        return { ...state, studentList: updatedStudentList };
      }
      default: {
        return state;
      }
    }
  };
  
  export default StudentReducer;