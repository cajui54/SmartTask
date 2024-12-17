import { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axios-instance";
import { FormTask } from "../pages/form-create";

interface ITask {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const useAxios = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [callFetch, setCallFetch] = useState<boolean>(false);
  const createNewTask = async (datas: FormTask) => {
    await axiosInstance.post("/task", {
      title: datas.title,
      description: datas.description,
      isCompleted: false,
    });

    return;
  };
  const deleteTask = async (id: string) => {
    try {
      setCallFetch(true);
      await axiosInstance.delete(`task/${id}`);
    } catch (error) {
      alert("Ocorreu um erro inesperado!");
    } finally {
      setCallFetch(false);
    }
  };
  useEffect(() => {
    const requestTasks = async () => {
      try {
        setIsLoading(true);
        const dataTasks = await axiosInstance.get<ITask[] | []>("/task");
        const tasksList: ITask[] | [] = dataTasks.data.map((data) => ({
          _id: data._id,
          title: data.title,
          description: data.description,
          isCompleted: data.isCompleted,
        }));

        setTasks(tasksList);
        console.log(tasksList);
      } catch (error: any) {
        alert(`Ocorreu um erro inesperado. ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    requestTasks();
  }, [callFetch]);
  return { tasks, isLoading, createNewTask, deleteTask };
};

export default useAxios;
