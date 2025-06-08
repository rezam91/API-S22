const getFact = async () => {
    const APIUrl = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    const APIJson = await APIUrl.json()
    return APIJson.text
}
const updateFacts = async () => {
    // for (let i = 0; i<3; i++) {
    //     document.getElementById('factsWrapper').getElementsByTagName('div')[i].innerText =await getFact()
    // }
    const [f1, f2, f3] = await Promise.all([getFact(),getFact(),getFact()])
    document.getElementById('factsWrapper').getElementsByTagName('div')[0].innerText = f1
    document.getElementById('factsWrapper').getElementsByTagName('div')[1].innerText = f2
    document.getElementById('factsWrapper').getElementsByTagName('div')[2].innerText = f3
}
updateFacts()

const refreshOne = (num) => {
    const updateOne = async () => {
        document.getElementById('factsWrapper').getElementsByTagName('div')[num].innerText = await getFact()
    }
    updateOne()
}