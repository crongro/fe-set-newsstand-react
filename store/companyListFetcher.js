import fetch from 'isomorphic-unfetch';

const getCompanyList = response => {
    return response.map((item, index) => {
        return { ...item, index };
    });
}

async function companyListFetcher() {
    const res = await fetch('http://localhost:3000/init');
    const {initData} = await res.json();
    const companyList = getCompanyList(initData);
    return Promise.resolve(companyList);
}

export default companyListFetcher;
