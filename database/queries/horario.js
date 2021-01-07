const horario={

    listars:`SELECT * FROM horarios WHERE horarios.estado=1`,

    horario:(id)=>{
        return `SELECT * FROM horarios WHERE horarios.idHorarios=${id}`
    },

    actualizar:(data)=>{
        return `UPDATE horarios SET 
                HoraFin='${data.hfin}',
                horaInicio='${data.hin}',
                Dia = ${data.hordia}
                WHERE horarios.idHorarios=${data.id}`
    },
    eliminar:(id)=>{
        return `DELETE FROM horarios WHERE horarios.idHorarios= ${id}`
        
    },
    agregar:(data)=>{
        return `INSERT INTO horarios (idHorarios, HoraFin, horaInicio, Dia, estado) 
        VALUES ('${data.idhor}','${data.hfin}', '${data.hin}' ,'${data.hordia}', '1');`
    }

};

module.exports=horario;

//En este archivo estarán creadas todas las consultas que corresponden a la tabla de personas