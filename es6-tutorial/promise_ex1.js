 const userLeft = false
 const userWatchingDogMeme = false

 function watchTutorialCallback(callback, errorCallback) {
     if (userLeft) {
         errorCallback({
             name: 'User Left',
             message: ':('
         })
     } else if (userWatchingDogMeme) {
         errorCallback({
             name: 'User Watching Dog Meme',
             message: 'WebDevTestSimplified < Dog'
         })
     } else {
         callback('Thumbs up hello')
     }
 }

 watchTutorialCallback((message) => {
     console.log('Succes: ' + message)
 }, (error) => {
     console.log(error.name + ' ' + error.message)
 })