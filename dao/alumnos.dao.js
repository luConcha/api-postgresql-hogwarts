import db from '../database/db.js';

class AlumnosDAO {
  async createAlumno(nombre, apellidos, edad, casa) {
    const [id] = await db('alumnos')
      .insert({
        nombre,
        apellidos,
        edad,
        casa,
      })
      .returning('id');

    return id;
  }

  async getAlumnos() {
    const alumnos = await db('alumnos').select('*');
    return alumnos;
  }

  async getAlumnoById(id) {
    const alumno = await db('alumnos').select('*').where({ id }).first();
    return alumno;
  }

  async updateAlumno(id, updates) {
    await db('alumnos').where({ id }).update(updates);

    return true;
  }

  async deleteAlumno(id) {
    await db('alumnos').where({ id }).del();

    return true;
  }
}
export default new AlumnosDAO();
