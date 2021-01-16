import api from "../API/api";

const services = {
  getListTask: async () => {
    const response = await api.get(`/tasks/`);
    return response;
  },
  addTask: async (data) => {
    const response = await api.post(`/tasks/`, data);
    return response;
  },
  deleteTask: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response;
  },
  editTask: async (data) => {
    const response = await api.put(`/tasks/${data.id}`, data);
    return response;
  },
  markComplete: async (data) => {
    const response = await api.put(`/tasks/markComplete/${data.id}`, data);
    return response;
  },
  clearComplete: async () => {
    const response = await api.get(`/tasks/clearComplete`);
    return response;
  },
  checkAll: async (status) => {
    const response = await api.post(`/tasks/checkAll`, status);
    return response;
  }
};

export default services;
