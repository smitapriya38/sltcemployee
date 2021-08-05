const empDetailsService = require("../services/details.service");

exports.employee_controller_fill_info = (req, res) =>{
    //validation area
    const data = {
        empid: req.body.empid,
        ename:req.body.ename
    };
    empDetailsService.employee_service_fill_info(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad Request"});
        }
        return res.status(201).send({
            success: 1,
            data: results
        });
    });
};

