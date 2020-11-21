const recorVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recorVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recorVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.all([
    recorVideoOne,
    recorVideoTwo,
    recorVideoThree
]).then((messages) => {
    console.log(messages)
})