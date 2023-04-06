import axios from "axios";

const taskApi = {
  getAllTask: async () => {
    try {
      const response = await axios.get("http://localhost:9999/tasks", {
        params: {
          _sort: "createAt",
          _order: "desc",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  addTask: async (task) => {
    try {
      await axios.post("http://localhost:9999/tasks", task);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  deleteTaskById: async (id) => {
    try {
      await axios.delete(`http://localhost:9999/tasks/${id}`); //id = 1 => http://localhost:9999/tasks/1
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  getTaskById: async (id) => {
    try {
      const response = await axios.get(`http://localhost:9999/tasks/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  updateTaskById: async (id, task) => {
    try {
      await axios.put(`http://localhost:9999/tasks/${id}`, task);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default taskApi;
