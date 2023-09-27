import alumnosServices from '../service/alumnos.services.js';

class AlumnosController {
  async createAlumno(request, response) {
    try {
      const id = await alumnosServices.createAlumno(request.body);
      return response.status(201).json(id);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }

  async getAlumnos(request, response) {
    try {
      const alumnos = await alumnosServices.getAlumnos();

      if (!alumnos) {
        return response.status(404).send('Alumnos not found');
      }

      return response.status(201).json(alumnos);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }

  async getAlumnoById(request, response) {
    try {
      const id = request.params.id;
      const alumno = await alumnosServices.getAlumnoById(id);

      if (!alumno) {
        return response.status(404).send('Alumno not found');
      }

      return response.status(201).json(alumno);
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }

  async updateAlumno(request, response) {
    try {
      const id = request.params.id;
      const update = request.body;
      const success = await alumnosServices.updateAlumno(id, update);

      if (!success) {
        return response.status(404).send('Alumno not found');
      }

      return response.status(201).send('Alumno actualizado');
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }

  async deleteAlumno(request, response) {
    try {
      const id = request.params.id;
      const success = await alumnosServices.deleteAlumno(id);

      if (!success) {
        return response.status(404).send('Alumno not found');
      }

      return response.status(201).send('Alumno Eliminado');
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  }
}

export default new AlumnosController();
