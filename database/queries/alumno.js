const alumno={
    listar:`SELECT * FROM alumnos WHERE alumnos.estado=1`,

    alumno:(id)=>{
        return `SELECT * FROM alumnos WHERE alumnos.CUI=${id}`
    },

    actualizar:(data)=>{
        return `UPDATE alumnos SET 
                NombreA='${data.nombre}',
                ApellidoA='${data.apellido}',
                Fecha = ${data.fecha}
                WHERE alumnos.CUI=${data.id}`
    },
    eliminar:(id)=>{
        return `Update alumnos SET estado=0 WHERE alumnos.CUI= ${id}`
    },
    agregar:(data)=>{
        //return `INSERT INTO persona (CUI, Nombre, Apellido, Profesion, Edad, estado) 
        //VALUES ('${data.cui}','${data.nombre}', '${data.apellido}', '${data.profesion}', '${data.edad}', '1');`
        return `INSERT INTO alumnos (CUI, NombreA, ApellidoA, Fecha, estado) 
        VALUES ('${data.cui}','${data.nombre}', '${data.apellido}' ,'${data.fecha}', '1');`
    }

};

module.exports=alumno;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas