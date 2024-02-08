import Modal from './Modal'
import useModal from '../hooks/useModal'
import ContactForm from "./ContactForm";
import ModalPortal from './ModalPortal';
const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
    const [isOpenModalPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
        <h2>Modals</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Modal 1</h3>
            <p>Hola este es el contenido del modal 1</p>
        </Modal>
        <button onClick={openModal2}>Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Modal 2</h3>
            <p>Hola este es el contenido del modal 2</p>
        </Modal>
        <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalPortal}>Modal Portal</button>
      <ModalPortal isOpen={isOpenModalPortal} closeModal={closeModalPortal} >
        <h3>Modal Portal</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, commodi.</p>
      </ModalPortal>
    </div>
  )
}

export default Modals