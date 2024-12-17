import { useForm, SubmitHandler } from "react-hook-form";
import TitleComponent from "../../components/title";
import * as styled from "./styled";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import MessageComponent from "../../components/message";
import { Link } from "react-router";
import { TiArrowBackOutline } from "react-icons/ti";
export interface FormTask {
  title: string;
  description: string;
}
interface ICallFetch {
  status: boolean;
  type: "success" | "error" | "";
  message: string;
}
const FormCreatePage = () => {
  const [callFetch, setCallFetch] = useState<ICallFetch>({
    status: false,
    type: "",
    message: "",
  });
  const { createNewTask } = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormTask>();
  const onResetAll = () => {
    setTimeout(() => {
      reset();
      setCallFetch({
        status: false,
        type: "",
        message: "",
      });
    }, 1000);
  };
  const onSubmit: SubmitHandler<FormTask> = async (data) => {
    try {
      await createNewTask(data);
      setCallFetch({
        status: true,
        type: "success",
        message: "Tarefa foi criada com sucesso!",
      });
      onResetAll();
    } catch (error: any) {
      setCallFetch({
        status: true,
        type: "error",
        message: `Ocorreu um error inesperado! ${error.message}`,
      });
    }
  };
  return (
    <styled.FormPage>
      <styled.FormContainer>
        <TitleComponent title="Smart Task" subtitle="Crie sua nova tarefa" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <legend>Preencha os campos abaixo:</legend>
            <styled.InputContainer>
              <label>
                <span>Título</span>
                <input type="text" {...register("title", { required: true })} />
                <span>*</span>
              </label>
              {errors.title?.type === "required" && (
                <p>Você não preencheu o campo obrigatório!</p>
              )}
            </styled.InputContainer>

            <styled.InputContainer>
              <label>
                <span>Descrição</span>
                <input
                  type="text"
                  {...register("description", { required: true })}
                />
                <span>*</span>
              </label>
              {errors.description?.type === "required" && (
                <p>Você não preencheu o campo obrigatório!</p>
              )}
            </styled.InputContainer>
          </fieldset>

          <styled.ButtonContainer>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>
                  <AiOutlineLoading3Quarters className="loadingSpin" />
                  Salvando ...
                </span>
              ) : (
                <span>Confirmar</span>
              )}
            </button>
            <button type="reset">Cancelar</button>
          </styled.ButtonContainer>
        </form>
        {callFetch.status && (
          <MessageComponent message={callFetch.message} type={callFetch.type} />
        )}
        <Link to="/">
          <TiArrowBackOutline />
          voltar
        </Link>
      </styled.FormContainer>
    </styled.FormPage>
  );
};

export default FormCreatePage;
