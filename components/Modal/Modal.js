import React from "react";
import ReactModal from "react-modal";
import { withTheme } from "styled-components";
import { Content, Header, Close, Hoverable } from "./ModalStyled";

const Modal = ({ isOpen, onClose, theme, imageUrl, children }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      borderRadius: 10,
      backgroundColor: theme.colors.card,
      padding: 0,
    },
    overlay: {
      zIndex: 150,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <Content imageUrl={imageUrl}>
        <Header>
          <Hoverable onClick={onClose}>
            <Close />
          </Hoverable>
        </Header>
        {children}
      </Content>
    </ReactModal>
  );
};

export default withTheme(Modal);
