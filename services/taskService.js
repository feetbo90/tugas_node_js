const { randomUUID } = require("crypto");

const tasks = [];

exports.list = () => tasks;

exports.findById = (id) => tasks.find((t) => t.id === id);

exports.create = ({ title }) => {
 const task = { id: randomUUID(), title, done: false, createdAt: Date.now() };
 tasks.unshift(task);
 return task;
};

exports.update = (id, payload) => {
 const task = tasks.find((item) => item.id === id);
 if (!task) return null;

 if (payload.title !== undefined) {
  task.title = payload.title;
 }

 if (payload.done !== undefined) {
  task.done = payload.done;
 }

 return task;
};

exports.remove = (id) => {
 const index = tasks.findIndex((item) => item.id === id);
 if (index === -1) return null;
 return tasks.splice(index, 1)[0];
};
