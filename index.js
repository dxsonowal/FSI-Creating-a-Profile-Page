let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let div1 = document.createElement('div')
div1.setAttribute('class', 'dog-content' )
content.append(div1)

let dogimage =document.createElement('img')
dogimage.setAttribute('class','dog-image')
dogimage.setAttribute('src','./assets/rizzo.jpg')
div1.append(dogimage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
div1.append(dogDetails)

let h3Header=document.createElement('h3')
h3Header.append('Description:')
h3Header.style.textAlign = 'left'
dogDetails.append(h3Header)

let dogPara = document.createElement('p')
dogPara.append(' ')
dogPara.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(dogPara)

let feedingTimes=document.createElement('h3')
feedingTimes.append('Feeding Times:')
feedingTimes.style.textAlign = 'left'
dogDetails.append(feedingTimes)

let feedTimeul = document.createElement('ul')

let feedTime = document.createElement('li')
feedTime.textContent = '9:00 am'
feedTimeul.appendChild(feedTime)

let item2 = document.createElement('li')
item2.textContent = '12:00 pm'
feedTimeul.appendChild(item2)
let item3 = document.createElement('li')
item3.textContent = '5:00 pm'
feedTimeul.appendChild(item3)

dogDetails.append(feedTimeul)

//let dogimage =document.createElement('')