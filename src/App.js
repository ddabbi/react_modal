import { useState } from 'react';
import './App.css';
import Modal from './components/modal-popup/modal';
// jsx: 자바스크립트에서 html을 사용하게 해주는확장자
// state를 만들어서 모달창 띄우고 지우고

function App() {
  let [showModal,setShowModal] = useState(false);   // true면 뜨고 fasle면 지우고
  
  function modalClose(){
    // 모달을 열기 위해서 setShowModal(true)
    // 모달을 닫기 위해선
    // 화면을 변경하기 위해서 state수정
    setShowModal(false)
  }


  // 버튼 누르면 setShowModal을 true로
  return (
    <div className="App">
      <button onClick={()=>{setShowModal(true)}}>모달창 열기</button>
      {
        //showModal이 true일때만 Modal 실행
        showModal == true ? <Modal id={'modal-1'} onclose={modalClose} _body = {<div>모달창바디</div>} _header={<div><h4>제목</h4></div>} _footer={<p>footer</p>}/> : null
        // &&: 왼쪽부터 검사하는데 false가 나오면 뒤에는 검사 안함
        //showModal && <Modal/>

      }  
      
        
    </div>
  );
}

export default App;
