const recorVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recorVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recorVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise.race([
    recorVideoOne,
    recorVideoTwo,
    recorVideoThree
]).then((message) => {
    console.log(message)
})