import './modal.css'


// modal 컴포넌트 만들어서 app.js에서 사용
// 컴포넌트 만든다음 내보낸다. (컴포넌트는 대문자로시작하는 함수)
export default function Modal({id, _header, _body, _footer, onclose}){
  return(
    <>
    {/* id값은 사용하는 곳에서 설정할 수 있게 해보자 => 매개변수 사용 
        컴포넌트 매개변수 1. props   2. {} 직접 정의  
        
        id값을 사용하는 곳에서 넣어줬으면 그것으로 설정하고,
        안넣었으면 Modal로 아이디 설정
        &&: (그리고) 앞에가 틀렸으면(0, false, "", null, NaN, undefined) 뒤 무시
        ||: (또는) 앞에가 맞았으면 어차피 맞아서 뒤에 무시*/}
        
      <div className='modal-component' id={id || 'Modal'} onClick={(e) => {
        //console.log(e.target.className)
        if(e.target.className === 'modal-component'){
          onclose();
        }
      }}>
        <div className='modal-content'>
          <div className='modal-header'>
            {/* 모달의 내용은 사용하는 곳에서 정하자  == 매개변수 */}
            <span className='close-modal-icon' onClick={onclose}>&times;</span>
            <h2>{_header}</h2>
          </div>
          <div className='modal-body'>
            {_body}
          </div>
          <div className='modal-footer'>
            {_footer}
          </div>
        </div>
      </div>
      
    </>
  )
};