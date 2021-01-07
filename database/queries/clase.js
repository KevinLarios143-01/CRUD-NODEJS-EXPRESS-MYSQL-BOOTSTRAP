const clase={
    listar:`SELECT * FROM clases WHERE clases.estado=1`,

    listarp:`SELECT * FROM  horarios,profesores WHERE profesores.estado=1 and horarios.estado=1`,

    clase:(id)=>{
        return `SELECT * FROM clases WHERE clases.idClases=${id}`
    },

    actualizar:(data)=>{
        return `UPDATE clases SET 
                Nombre='${data.nombre}',
                Profesores_DPI='${data.pod}',
                Fecha = ${data.fecha}
                WHERE clases.idClases=${data.id}`
    },
    eliminar:(id)=>{
        
        return `Update clases SET estado=0 WHERE clases.idClases= ${id}`
    },
    agregar:(data)=>{
        return `INSERT INTO clases (idClases, NombreClase, Profesores_DPI, Horarios_idHorarios, estado) 
        VALUES ('${data.idc}','${data.nombre}', '${data.prodip}' ,'${data.hordis}', '1');`
    }

};

module.exports=clase;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas