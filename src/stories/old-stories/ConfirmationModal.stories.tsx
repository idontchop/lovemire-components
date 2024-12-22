import React from "react";
import ConfirmationModal from "../../components-old/ConfirmationModal";
import { Standard } from "./RadioSelection.stories";
import { ThemeProvider } from "styled-components";

export default {
  title: "Old/ConfirmationModal",
  component: ConfirmationModal,
};

export const ConfirmationModalStoryLoad = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        position: "relative",
        width: "600px",
        height: "600px",
      }}
    >
      <ThemeProvider theme={Standard}>
        <ConfirmationModal
          message="Cancel will lose changes"
          onConfirm={() => console.log("confirmed")}
          onCancel={() => console.log("canceled")}
        >
          Profile not saved, cancel changes?
        </ConfirmationModal>
      </ThemeProvider>
    </div>
  );
};
