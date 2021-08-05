const db = require("../config/db.config");

exports.employee_service_fill_info = (data, callBack) => {
    db.query(
        `insert into sample values (?, ?)`,
        [data.empid, data.ename],
        (error) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, 'Employee details stored successfully');
        }
    );
};

