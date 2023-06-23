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