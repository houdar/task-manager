
interface ModalProps {
    modalOpen: boolean;
    setModelOpen: (open :boolean)=>boolean | void;
    children: React.ReactNode;
}

const Model:React.FC<ModalProps> = ({modalOpen,setModelOpen ,children}) => {
  return (
    <div>
  

  <dialog id="my_modal_3" className={`modal ${ modalOpen ? "modal-open" : ""} `}>
  <div className="modal-box">
  {children}
    <form method="dialog">
     
      <button onClick={()=>setModelOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
  </div>
</dialog>
  </div>
  )
}

export default Model