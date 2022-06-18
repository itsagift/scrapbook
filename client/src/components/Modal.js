import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Modal({children, showModal, setShowModal}){
  let navigate = useNavigate();
  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        setShowModal(false)
      }
    }
  
    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [])
  
  
  function handleModal(){
    navigate(-1);
  }

  return(
    <div className="modal">
      <div className='modal-content'>
        <button onClick={()=> handleModal()}>Close</button>
        {children}
      </div>
    </div>
  )
}

export default Modal