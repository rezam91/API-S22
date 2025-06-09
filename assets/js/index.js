const getFact = async () => {
    try {
        const APIUrl = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        const APIJson = await APIUrl.json()
        return APIJson.text
    } catch {
        alert('OUPS! Please Check your Connection and try again!')
        return 'OUPS! Please Check your Connection and try again!'
    }
}
const updateFacts = async () => {
    // for (let i = 0; i<3; i++) {
    //     document.getElementById('factsWrapper').getElementsByTagName('div')[i].innerText =await getFact()
    // }
    document.getElementById('factsWrapper').getElementsByTagName('img')[1].style.display = 'unset'
    document.getElementById('factsWrapper').getElementsByTagName('img')[4].style.display = 'unset'
    document.getElementById('factsWrapper').getElementsByTagName('img')[7].style.display = 'unset'
    document.getElementById('factsWrapper').getElementsByTagName('div')[0].innerText = ""
    document.getElementById('factsWrapper').getElementsByTagName('div')[1].innerText = ""
    document.getElementById('factsWrapper').getElementsByTagName('div')[2].innerText = ""
    const [f1, f2, f3] = await Promise.all([getFact(),getFact(),getFact()])
    document.getElementById('factsWrapper').getElementsByTagName('div')[0].innerText = f1
    document.getElementById('factsWrapper').getElementsByTagName('div')[1].innerText = f2
    document.getElementById('factsWrapper').getElementsByTagName('div')[2].innerText = f3

    document.getElementById('factsWrapper').getElementsByTagName('img')[1].style.display = 'none'
    document.getElementById('factsWrapper').getElementsByTagName('img')[4].style.display = 'none'
    document.getElementById('factsWrapper').getElementsByTagName('img')[7].style.display = 'none'
}
updateFacts()

const refreshOne = (num) => {
    document.getElementById('factsWrapper').getElementsByTagName('img')[3*num+1].style.display = 'unset'
    document.getElementById('factsWrapper').getElementsByTagName('div')[num].innerText=""
    const updateOne = async () => {
        document.getElementById('factsWrapper').getElementsByTagName('div')[num].innerText = await getFact()
        document.getElementById('factsWrapper').getElementsByTagName('img')[3*num+1].style.display = 'none'
    }
    updateOne()
}

const refreshAll = () => {
    updateFacts()
}