const profesor={
    listar:`SELECT * FROM profesores WHERE profesores.estado=1`,

    profesor:(id)=>{
        return `SELECT * FROM profesores WHERE profesores.DPI=${id}`
    },

    actualizar:(data)=>{
        return `UPDATE profesores SET 
                NombreP='${data.nombre}',
                ApellidoP='${data.apellido}',
                Fecha = ${data.fecha}
                WHERE profesores.DPI=${data.id}`
    },
    eliminar:(id)=>{
        return `Update profesores SET estado=0 WHERE profesores.DPI= ${id}`
    },
    agregar:(data)=>{
        return `INSERT INTO profesores (DPI, NombreP, ApellidoP, Fecha, estado) 
        VALUES ('${data.dpi}','${data.nombre}', '${data.apellido}' ,'${data.fecha}', '1');`
    }

};

module.exports=profesor;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas