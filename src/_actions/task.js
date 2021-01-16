import services from "../_services/task";

const actions = {
  getListTask: async () => {
    try {
      const response = await services.getListTask();

      return response.data;
    } catch (error) {
      return error;
    }
  },
  addTask: async (data) => {
    try {
      const response = await services.addTask(data);

      return response.data;
    } catch (error) {}
  },
  deleteTask: async (id) => {
    try {
      const response = await services.deleteTask(id);

      return response;
    } catch (error) {}
  },
  editTask: async (data) => {
    try {
      const response = await services.editTask(data);
      return response;
    } catch (error) {}
  },
  markComplete: async (data) => {
    try {
      const response = await services.markComplete(data);
      return response;
    } catch (error) {}
  },
  clearComplete: async () => {
    try {
      const response = await services.clearComplete();
      return response;
    } catch (error) {}
  },
  checkAll: async (status) => {
    try {
      const response = await services.checkAll(status);
      return response;
    } catch (error) {}
  }
};

export default actions;
