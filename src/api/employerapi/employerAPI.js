import axios from "axios";

const host = `${import.meta.env.VITE_API_HOST}/employer`;

//고용인 리스트 호출 api
export const getEmployerList = async (page) => {

    const pageValue = (Number)(page || 1);

    const res = await axios.get(`${host}/list?page=${pageValue}`);

    console.log(res.data);

    return res.data;
}

//고용인 삭제 api
export const deleteEmployer = async (eno) => {

    const res = await axios.put(`${host}/delete/${eno}`);

    console.log(res.data);

    return res.data;
}

//고용인 상세 보기 api
export const readEmployer = async (eno) => {

    const res = await axios.get(`${host}/read/${eno}`);

    console.log(res.data);

    return res.data;
}

//고용인 수 확인 api
export const countEmployer = async () => {

    const res = await axios.get(`${host}/count`);

    console.log(res.data);

    return res.data;
}