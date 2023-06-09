const search = async (url) => {
    const getCriptoInfo = await fetch(url);
    const data = await getCriptoInfo.json();
    return data
}

export default search