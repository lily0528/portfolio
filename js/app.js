if(navigator.serviceWorker){
    navigator.serviceWorker.register('portfolio/sw.js')
    .then(() => {
        console.log("Serve Worker Installed")
    })
    .catch(()=>{
        console.log("Service Work Did not Work!")
    })
    }
