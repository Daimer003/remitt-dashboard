import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface Props {
    children: any,
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export function BasicUsage({children, isOpen, onClose}: Props) {

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay background='var(--background-modal)' />
        <ModalContent background='var(--background-modal-content)'>
          <ModalCloseButton />
          <ModalBody>
           {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
