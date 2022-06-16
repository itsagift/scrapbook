import {useEffect} from 'react';

function Modal({children, showModal, setShowModal}){
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
    setShowModal(false)
  }

  return(
    <div className={showModal ? 'modal' : 'modal-hide'}>
      <div className='modal-content'>
        {children}
        <button onClick={()=> handleModal()}>Close</button>
      </div>
    </div>
  )
}

export default Modal