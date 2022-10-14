const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        // resolve([7, 4, 1])
        reject('Things went wrong!')
        //resolve([2, 3, 2]) // This is never going to take effect

    },2000)
})

doWorkPromise.then((result) => {
    console.log('Seccess!', result)
}).catch((error) => {
    console.log('Error!', error)
})