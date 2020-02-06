const { fetchData, postData } = require('./http');

window.__permissionService = (command, callback = null, payload = null) => {
    switch (command) {
        case 'getTCString':
            {
                return fetchData().then(extractedData => {
                    const title = extractedData.title.toUpperCase();
                    console.log(callback)
                    return title;
                })
            }
        case 'setTCString':
            return postData(callback, payload)
        default:
            break
    }
}