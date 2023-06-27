import * as request from '~/utils/httpRequest';

export const getAverageBenefitPlan = async () => {
    try {
        const res = await request.get(`/employees/average-benefit-plan`);
        return res.data;
    } catch (error) {
        console.log(error)
        return null;
    }
}