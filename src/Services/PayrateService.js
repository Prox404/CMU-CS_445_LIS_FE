import * as request from '~/utils/httpRequest';

export const getAllPayrate = async () => {
    try {
        const res = await request.get(`/payrates`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}