
import Employee from "../db";
import React, { useState } from "react";
export const EmployeeList = () => {
  const [employee] = useState(Employee)

  return (
 <div>
    {Employee.map((el) => (
        
          <div className="list_container">
        
            <div className="employee_card">
              <img className="employee_image"src="{current.imgae}" />
              <div
               className="employee_name">{el.employee_name}</div>
              <div className="employee_title">{el.title}</div>
              <div className="salary">{el.salary}</div>
            </div>
          </div>
       
    ))}
     


</div>
  );
};


