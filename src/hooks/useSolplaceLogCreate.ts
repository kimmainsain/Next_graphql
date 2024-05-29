import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_SOLPLACE_LOG_BY_SOLPLACE_NAME } from "@/graphql/mutations";
import { FETCH_SOLPLACE_LOGS } from "@/graphql/queries";
import { useRouter } from "next/navigation";

export const useSolplaceLogCreate = () => {
  const router = useRouter();
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
      router.push("/solplaces/list");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleCreate, modal, setModal };
};
