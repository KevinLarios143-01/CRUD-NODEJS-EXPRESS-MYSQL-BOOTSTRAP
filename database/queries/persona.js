const persona={
    listar:`SELECT * FROM persona WHERE persona.estado=1`,

    persona:(id)=>{
        return `SELECT * FROM persona WHERE persona.CUI=${id}`
    },

    actualizar:(data)=>{
        return `UPDATE persona SET 
                Nombre='${data.nombre}',
                Apellido='${data.apellido}',
                Profesion='${data.profesion}',
                Edad = ${data.edad}
                WHERE persona.CUI=${data.id}`
    },
    eliminar:(id)=>{
        return `Update persona SET estado=0 WHERE persona.CUI= ${id}`
    },
    agregar:(data)=>{
        return `INSERT INTO persona (CUI, Nombre, Apellido, Profesion, Edad, estado) 
        VALUES ('${data.cui}','${data.nombre}', '${data.apellido}', '${data.profesion}', '${data.edad}', '1');`
    }

};

module.exports=persona;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas