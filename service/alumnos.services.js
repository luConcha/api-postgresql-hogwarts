import alumnoDAO from '../dao/alumnos.dao.js';
class AlumnosService {
  async createAlumno(alumnoDto) {
    const { nombre, apellidos, edad, casa } = alumnoDto;
    return alumnoDAO.createAlumno(nombre, apellidos, edad, casa);
  }

  async getAlumnos() {
    return alumnoDAO.getAlumnos();
  }

  async getAlumnoById(id) {
    return alumnoDAO.getAlumnoById(id);
  }

  async updateAlumno(id, updates) {
    return alumnoDAO.updateAlumno(id, updates);
  }

  async deleteAlumno(id) {
    return alumnoDAO.deleteAlumno(id);
  }
}

export default new AlumnosService();
