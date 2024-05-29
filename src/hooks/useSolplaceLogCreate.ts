import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_SOLPLACE_LOG_BY_SOLPLACE_NAME } from "@/graphql/mutations";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/queries";
import {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  BUTTON_MESSAGE,
} from "@/constants/modalText";

export const useSolplaceLogCreate = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    message: "",
    buttonMessage: "",
  });

  const [createSolplaceLogBySolplaceName] = useMutation(
    CREATE_SOLPLACE_LOG_BY_SOLPLACE_NAME,
    {
      refetchQueries: [{ query: FETCH_SOLPLACE_LOGS, variables: { page: 1 } }],
    }
  );

  const handleCreate = async (
    title: string,
    content: string,
    photos: string[]
  ) => {
    try {
      const result = await createSolplaceLogBySolplaceName({
        variables: {
          solplaceName: title,
          createSolplaceLogInput: {
            introduction: content,
            images: photos,
          },
        },
      });
      setModal({
        isVisible: true,
        message: SUCCESS_MESSAGE.VALID_CREATE,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    } catch (error) {
      setModal({
        isVisible: true,
        message: ERROR_MESSAGE.INVALID_CREATE_ERROR,
        buttonMessage: BUTTON_MESSAGE.CONFIRM,
      });
    }
  };

  return { handleCreate, modal, setModal };
};
