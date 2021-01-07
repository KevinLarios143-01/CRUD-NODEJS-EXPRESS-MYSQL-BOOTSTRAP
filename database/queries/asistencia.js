const asistencia={
    listar:`SELECT * FROM asistencia`,
    
    listart:`SELECT * FROM profesores,alumnos,clases`,

    asistencia:(id)=>{
        return `SELECT * FROM asistencia`
    },
    eliminar:(id)=>{
        return `DELETE FROM asistencia WHERE asistencia.ID_Asistencia= ${id}`
        
    },
    agregar:(data)=>{
        return `INSERT INTO asistencia (ID_Asistencia, Profesores_DPI, alumnos_CUI, clases_idClases) 
        VALUES ('null','${data.prodip}', '${data.alcui}' ,'${data.clasi}');`
    }

};

module.exports=asistencia;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas