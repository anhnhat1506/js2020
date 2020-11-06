let moneyBuyGirlFriendCake = 999
const nhatBuysCakeToHaveGirlFriend = cakeType => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moneyBuyGirlFriendCake > 1000) {
                resolve(cakeType)
            } else {
                reject('Không có tiền mua bánh tặng để có gấu :D')
            }
        }, 1000)
    })
}

const promise = nhatBuysCakeToHaveGirlFriend('Bánh Sinh Nhật')
    .then(cake => console.log(cake))
    .catch(nocake => console.log(nocake))