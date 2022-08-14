const initialState ={
    students : [{
        id: 1,
        hoTen: 'Nguyễn Bảo Trân',
        phone: '0981840312',
        email: 'nbtran1806@gmail.com'}],
        selectedStudent: {},
};


const StudentReducer = (state = initialState, action) => {

  switch(action.type)
  {
    case 'ADD_STUDENT':{
      const students = [...state.students, action.student];
      return {...state, students};
    }
    case "DELETE_STUDENT":{
      const students = state.students.filter(
        (student) => student.id !== action.studentId
      );
      return {...state, students};
    }
    case "SELECT_STUDENT":{
      return {...state, selectedStudent: action.student};

    }
    case "UPDATE_STUDENT":{
        const students = state.students.map((student) =>{
            if(student.id === action.studentId){
                return{...action.student, id: action.studentId};
            }
            return student;
        });
        return{...state, students, selectedStudent: {}};
    }
    default:{
      return {...state};
      
    }
  }
  
};
export default StudentReducer;