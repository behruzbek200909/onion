const ellIst = document.querySelector(".list")
for(let yangilik of daryoPostlari){
    const newLi = document.createElement("li")
    const newImg = document.createElement("img")
    const newTitle = document.createElement("h4")
    const newP = document.createElement("p")
    
    newImg.setAttribute("src", "https://picsum.photos/200/200")
    newTitle.textContent = yangilik.title
    newP.textContent = yangilik.date

    newLi.appendChild(newImg)
    newLi.appendChild(newTitle)
    newLi.appendChild(newP)
    ellIst.appendChild(newLi)
}