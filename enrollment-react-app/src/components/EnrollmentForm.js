import React from 'react';
import {useState}  from 'react';
import {MdEdit,MdDelete} from 'react-icons/md';
import '../App.css';

const EnrollmentForm=(props)=>{
    //폼에 입력한 이름 성을  이메일기억하기 하기 위해 state형 변수 선언
    //onchange 이벤트 발생시 입력한 이름성을 firstname,lastname,email 변수에 저장
    const [firstName,setFirstName,] =useState("");
    const [lastName,setLastName] =useState("");
    const [email,setEmail] =useState("");
    //state형 변수에 저장된 이름/성을 환영메세시지 출력하기 위해 선언
    const [welcomeMessage,setWelcomeMessage] =useState("");
    const [msgStyle,setMsgStyle]=useState("redOne");

    //등록 수정 버튼 정의
    const [btnValue,setBtnValue]=useState("등록하기");
    const [studKey,setStudKey]=useState(0);

    const handleEdit=(key)=>{
        //수정할 학생정보를 폼에 표시
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);

        setStudKey(key);
        setBtnValue('수정하기');
    };

    //등록하기 번튼을 클릭시 이름성을 환영메시지로 만들어
    //폼 아래쪽에 나타냄
    const handleSubmit = (e) => {
        let msg ='더이상 참가못해요';
        setMsgStyle('redOne');
        if(props.currentSeat-1 >=0){
            //props로 전달받ㅌ은 함수 setUpdateSeats를 이용해서 상위 컴퍼넌트의 seats 변수값을 조작함
       props.setUpdateSeats(props.currentSeat-1);//참여가능 인원수 감소
            setMsgStyle('message');
            msg =`환영합니다,${firstName}${lastName}님!\n`+
            `${email}로 등록관련 정보를 발송해드렸습니다`;
            //등록완료된 학생정보에 사용할 key 생성
            const rndKey =Math.floor(1000+Math.random() *9000);


            //학생정보 등록시 rndkey를
            //학생정보 수정시 studkey를 사용하도록함
           const key=btnValue==='등록하기'? rndKey:studKey;

            //생성한 키와 등록완료된 학생정보를 props에 저장
            let stud={
                key: key,fname: firstName, lname:lastName,
                program:props.chosenProgram, email:email,
                edit:<MdEdit className="actionIcon"
                onClick={()=>handleEdit(key)}/>,
                //삭제 이이콘 클릭시 대상 학생정보의 키를 넘킴
                delete :<MdDelete className="actionIcon"
                onClick={()=>props.handleItemSelection('delete',key)}/>
            }

            props.setstudDetails(stud);

        }
        setWelcomeMessage(msg) ;
       e.preventDefault(); //submit 기능 전파 중지


    };
    const handleInputChange = (setInput, e) => {
        setInput(e.target.value);

    };
    //취소하기 버튼 글릭시
    //폼에 입력된 데이터 제거 버튼의 글자바꿈
    const handleCancel=(e)=>{
        setFirstName('');
        setLastName('');
        setEmail('');

        setBtnValue('등록하기');
        e.preventDefault();
    };

    return(
        <div>
            <div className= "enrolContainer">
            <form className="enrolForm">

            <ul className="ulEnrol">
                <li>
                    <label htmlFor="FirstName"></label>
                    <input type="text" id="FirstName"
                    name="firstName" className="inputFields"
                    placeholder="FirstName" value={firstName}
                    onChange={e=> handleInputChange(setFirstName,e)}/>
                </li>
                <li>
                    <label htmlFor="LastName"></label>
                    <input type="text" id="LastName"
                           name="lastName" className="inputFields"
                           placeholder="LastName" value={lastName}
                           onChange={e=> handleInputChange(setLastName,e)}/>
                </li>
                <li>
                    <label htmlFor="Email"></label>
                    <input type="text" id="Email"
                           name="email" className="inputFields"
                           placeholder="Email" value={email}
                           onChange={e=> handleInputChange(setEmail,e)}/>
                </li>
                <li id="center-btn">
                    <button type="submit" id="btnEnrol" className="btn"
                            name ="enrol" onClick={handleSubmit}>
                        {btnValue}</button>
                    <button type="submit" id="btnCancel" className="btn"
                            name ="cancel" onClick={handleCancel}>
                        취소하기</button>

                </li>
                <li>
                    <label id="studentMsg" className={msgStyle}>
                        {welcomeMessage}
                    </label>
                </li>
            </ul>



            </form>

            </div>
        </div>
    );
};
export default EnrollmentForm;