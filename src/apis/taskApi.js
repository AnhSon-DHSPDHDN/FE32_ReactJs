import axios from "axios";

const taskApi = {
  getAllTask: async () => {
    try {
      const response = await axios.get("http://localhost:9999/tasks");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  deleteTaskById: (id) => {},
  getTaskById: (id) => {},
  updateTaskById: (id) => {},
};

export default taskApi;
