    1. Darle funcionalidad a las sgtes funciones adaptándolas al backend de Members
  
  
  async function getAll() {
    return get("/tutorials");
  }

  async function get(id) {
    return get(`/tutorials/${id}`);
  }

  async function create(data) {
    return post("/tutorials", data);
  }

  async function update(id, data) {
    return put(`/tutorials/${id}`, data);
  }

  async function delete(id) {
    return delete(`/tutorials/${id}`);
  }

  async function deleteAll() {
    return delete(`/tutorials`);
  }

  async function findByTitle(title) {
    return get(`/tutorials?title=${title}`);
  }



2. Terminar de adaptar la vista al sgte template 

https://tailwindui.com/components/application-ui/page-examples/detail-screens



3. Al momento de clickear algún miembro, se muestre su info.

4. Permita editarlo (botón de abiri modal, modal de formulario con datos prefijados, boton de actualizar), borrarlo (botón) + Crear un nuevo Miembro ( botón de abrir modal, Modal de formulario, botón de guardado)

5. Pueden utilizar el pasar el id a través de la función y luego hacer un find en el array o ocupar un currentMember






  * ref ( https://www.bezkoder.com/react-node-express-mongodb-mern-stack/ )