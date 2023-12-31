import * as request from '~/utils/httpRequest';

export const getAllEmployee = async () => {
    try {
        const res = await request.get(`/employees`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const addEmployee = async (params) => {
    try {
        console.log("params: ", params);
        const res = await request.post(`/employees/store`,params);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
export const getEmployeeByID = async (id) => {
    try {
        console.log("params: ", id);
        const res = await request.get(`/employees/get/${id}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const updateEmployee = async (params) => {
    try {
        console.log("params: ", params);
        const res = await request.put(`/employees/update`,params);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const deleteEmployees = async (id) => {
    try {
        console.log("params: ", id);
        const res = await request.del(`/employees/delete?Employee_ID=${id}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const getTotalIncome = async () => {
    try {
        const res = await request.get(`/employees/total-income`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const getVacationDays = async () => {
    try {
        const res = await request.get(`/employees/total-vacation-day`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const getHiringAnniversary  = async (number) => {
    try {
        const res = await request.get(`/employees/check-hiring-anniversary${number ? `?daysThreshold=${number}` : ''}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const checkVacationDays  = async (number) => {
    try {
        const res = await request.get(`/employees/check-vacation-days${number ? `?daysThreshold=${number}` : ''}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}

export const getEmployeeBirthday  = async (month) => {
    try {
        const res = await request.get(`/employees/get-employee-within-month${month ? `?month=${month}` : ''}`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}
