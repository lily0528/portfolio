if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js')
    .then(() => {
        console.log("Serve Worker Installed")
    })
    .catch(()=>{
        console.log("Service Work Did not Work!")
    })
    }
