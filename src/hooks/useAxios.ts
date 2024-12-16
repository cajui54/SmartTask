import { useState, useEffect } from "react";
import { axiosInstance } from "../helpers/axios-instance";

interface ITask {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}
const useAxios = () => {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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
      } catch (error: any) {
        setError(`Ocorreu um erro inesperado. ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    requestTasks();
  }, []);
  return { tasks, isLoading, error };
};

export default useAxios;
