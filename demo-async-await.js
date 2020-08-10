const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(['Mobile', 'Mac', 'Pen', 'Book']);
        }, 1000);
    });
};

const processRequest = async () => {
    const items = await getItems();
    const items1 = await getItems();
    const items2 = await getItems();
    const items3 = await getItems();
    const items4 = await getItems();
    const items5 = await getItems();
    return [items, items1, items2, items3,items4,items5];
};

processRequest()
.then(results => console.log(results))
.catch(err => console.error(err));