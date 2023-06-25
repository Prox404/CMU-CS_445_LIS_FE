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