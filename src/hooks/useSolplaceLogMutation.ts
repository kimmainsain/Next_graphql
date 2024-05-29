import { useMutation } from "@apollo/client";
import { useState } from "react";
import {
  DELETE_SOLPLACE_LOG_BY_ID,
  UPDATE_SOLPLACE_LOG_BY_ID,
} from "@/graphql/mutations";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  BUTTON_MESSAGE,
} from "@/constants/modalText";
import { ModalFieldType } from "@/types/modal/modalType";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/queries";

export const useSolplaceLogMutation = (id: string | string[]) => {
  const [deleteSolplaceLogById] = useMutation(DELETE_SOLPLACE_LOG_BY_ID, {
    refetchQueries: [{ query: FETCH_SOLPLACE_LOGS, variables: { page: 1 } }],
  });
  const [updateSolplaceLogById] = useMutation(UPDATE_SOLPLACE_LOG_BY_ID, {
    refetchQueries: [{ query: FETCH_SOLPLACE_LOGS, variables: { page: 1 } }],
  });
  const [modal, setModal] = useState<ModalFieldType>({
    isVisible: false,
    message: "",
    buttonMessage: "",
  });

  const handleUpdate = async (content: string, photos: string[]) => {
    try {
      const result = await updateSolplaceLogById({
        variables: {
          id,
          updateSolplaceLogInput: {
            introduction: content,
            images: photos,
          },
        },
      });
      setModal({
        isVisible: true,
        message: SUCCESS_MESSAGE.VALID_UPDATE,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    } catch (error) {
      setModal({
        isVisible: true,
        message: ERROR_MESSAGE.INVALID_UPDATE_ERROR,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    }
  };

  const handleDelete = async () => {
    try {
      const result = await deleteSolplaceLogById({
        variables: {
          id,
        },
      });
      setModal({
        isVisible: true,
        message: SUCCESS_MESSAGE.VALID_DELETE,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    } catch (error) {
      setModal({
        isVisible: true,
        message: ERROR_MESSAGE.INVALID_DELETE_ERROR,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    }
  };

  return {
    handleUpdate,
    handleDelete,
    modal,
    setModal,
  };
};
