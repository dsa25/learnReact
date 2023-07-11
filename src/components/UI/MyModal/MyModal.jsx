import cl from "./MyModal.module.css"

const MyModal = ({ children, visible, setVisible }) => {
  const modalClasses = [cl.myModal]

  if (visible) modalClasses.push(cl.active)

  return (
    <div className={modalClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal
