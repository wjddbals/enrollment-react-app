import React from 'react';
import '../EnrolList.css';
import {DetailsList} from '@fluentui/react/lib/DetailsList';
import {useEffect} from 'react';
//과정등록 학생리스트컬럼 정의(이름성 과정종류 이메일)
//련재컬럼 앞뒤로 수정 삭제버튼 추가
const columns=[
    {
        key: 'edit',
        name: "수정",
        fieldName: "edit",
        minWidth: 50,
        isResizable: false
    },
    {
        key:'fname',name:'First Name',fieldName:'fname',
        minWidth:90,isResizable:false
    },


    {
        key:'lname',name:'Last Name',fieldName:'lname',
        minWidth:90,isResizable:false
    },



    {
        key:'program',name:'과정종류',fieldName:'program',
        minWidth:90,isResizable:false
    },


    {
        key:'email',name:'이메일',fieldName:'email',
        minWidth:90,isResizable:false
    },
    {
        key: 'delete',
        name: "삭제",
        fieldName: "delete",
        minWidth: 50,
        isResizable: false
    }
];


//테스트용 데이터 삽입-컬럼 정의시 사용햇던 fieldName 으로 값초기화
let items=[];

const EnrolList =(props) =>{
    //과정등록 학생 데이터가 추가 될때마다 ui를 재런더링하기 위해
    //useEffect 리액트 훅 샤용
    // useEffect:컴퍼넌트 생명주기에 따라 dom 렌더링 을 처리
    //props객체에 값이 존재할때 마다 detailslist에 랜더링해서 화면에표시
    useEffect(()=>{
        const curItemKey =props.studDetails.key;
        if(curItemKey){
            items=[...items,props.studDetails];
            props.setStudDetails({});
        }
        //삭제기능 수행
        if(props.action ==='delete'){
            //삭제 대상 아이템을 키로 가져옴
        const deleteItem=items.filter(
            (item) =>item.key ===props.selectedItemKey
        )[0];
        //삭제대상 아이템만을 제외하고 다시 items 객체 생성
            items =items.filter((item)=>item !==deleteItem);

        }
    },[props]);

    return(
        <div className="enrolList">
            <DetailsList items={items}columns={columns} />
        </div>
    );


};

export default EnrolList;