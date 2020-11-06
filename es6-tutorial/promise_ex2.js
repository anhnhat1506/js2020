const userLeft = true
const userWatchingDogMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingDogMeme) {
            reject({
                name: 'User Watching Dog Meme',
                message: 'WebDevTestSimplified < Dog'
            })
        } else {
            resolve('Thumbs up hello')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Succes: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})