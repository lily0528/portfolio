if(navigator.serviceWorker){
    navigator.serviceWorker.register('https://lily0528.github.io/sw.js')
    .then(() => {
        console.log("Serve Worker Installed")
    })
    .catch(()=>{
        console.log("Service Work Did not Work!")
    })
    }
