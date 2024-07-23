const {
  addNoteHandler,
  getAllNoteHandler,
  getNotesByIdHandler,
  editNotesByIdHandler,
  deleteNoteByIdHandler,
} = require("./handler");

const routes = [
  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNotesByIdHandler,
  },
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNotesByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
