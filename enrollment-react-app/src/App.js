import React, {useState} from "react";
import EnrollmentForm from "./components/EnrollmentForm";

//EnrollmentForm이라는 폼을 리턴하도록
//정의된 앱 컴퍼넌트
const App=()=>{
    const [program,setProgram]=useState("US");//프로그램 종류
   // const [seats,setSeats]=useState(100);//참가가능 인원수
    const [ugseats,setUgSeats]=useState(60);
    const [pgseats,setPgSeats]=useState(40);

    const handleChange = (e) => {
        setProgram(e.target.value);
    };

    //참가가능 인원수를 변경하는 함수/
    const setUpdateSeats=(modifiySeat)=>{
        if(program ==='UG')
            setUgSeats(modifiySeat);
        else
            setPgSeats(modifiySeat);
    };
    return (
        <div className="App">
            <div className="programs">
                <label>학사과정프로그램 참가가능 인원수:{ugseats}</label>
                <br/>
                <label>석사프로그램 참가가능 인원수:{pgseats}</label>
                <br/><br/>
                <label>프로그램 종류:</label>
                <select className="appDropDowns"
                onChange={handleChange} value={program}>
                    <option value="UG">학사과정(대학생)</option>
                    <option value="PG">석사과정(대학원생)</option>
                </select>
                <br/><br/><br/>
            </div>
            <EnrollmentForm chosenProgram={program}
            currentSeat={(program==='UG') ? ugseats :pgseats}
                            setUpdateSeats={setUpdateSeats}/>
        </div>

    );
};

//컴퍼넌트나 모듈형태로 작성하는 경우
//기본적으로 내보내기할 함수명 지정
export default App;