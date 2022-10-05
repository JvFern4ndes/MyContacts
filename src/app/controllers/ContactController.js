class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from Contact Controller');
  }

  show() {

  }

  store() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = new ContactController();
