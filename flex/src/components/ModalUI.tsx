import styled from 'styled-components';

const ModalUI = () => {
  return (
    <Modal>
      <Dialog>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        perferendis vero, adipisci amet atque quis culpa qui dolores, fugit
        placeat laboriosam. Dicta sapiente suscipit possimus praesentium rerum
        cumque sequi atque.
      </Dialog>
    </Modal>
  );
};

const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dialog = styled.div`
  background-color: white;
  width: 50vw;
  padding: 2em;
  border-radius: 1em;
  background-color: white;
`;
export default ModalUI;
