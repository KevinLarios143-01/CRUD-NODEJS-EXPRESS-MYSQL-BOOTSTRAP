const reporte={
    listar:`SELECT * FROM reportes`,
    
    listart:`SELECT * FROM profesores,alumnos WHERE profesores.estado=1 and alumnos.estado=1`,

    asistencia:(id)=>{
        return `SELECT * FROM reportes`
    },
    eliminar:(id)=>{
        return `DELETE FROM reportes WHERE reportes.IdReporte= ${id}`
        
    },
    agregar:(data)=>{
        return `INSERT INTO reportes (IdReporte, Motivo,Profesores_DPI,Alumnos_CUI) 
        VALUES ('null','${data.moti}','${data.prodip}', '${data.alcui}' );`
    }

};

module.exports=reporte;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas