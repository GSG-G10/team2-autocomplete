  
const input = document.querySelector('.data-section-input');
const cardsContainer = document.querySelector('.cards-container')
const sendData = () => {
  const query = input.value.trim();
  createDataList(query);
};
input.oninput = sendData;
const creatCards = (array) => {
                removeChild(cardsContainer)
                array.forEach((e) => {
                const createStick = document.createElement('div');
                createStick.classList.add ('card-stick')
                cardsContainer.appendChild(createStick);

                const cardImg = document.createElement('img');
                cardImg.classList.add ('card-img')
                createStick.appendChild(cardImg);
                if(e.picture == 'https://cdn.myanimelist.net/images/qm_50.gif'){
                  cardImg.src = 'https://images.hdqwalls.com/download/love-live-sunshine-404-error-4k-wo-3840x2160.jpg'
                }else{
                  cardImg.src = e.picture
                }
                
                const cardMainData = document.createElement('div')
                createStick.appendChild(cardMainData)
                cardMainData.classList.add('card-main-data')

                const dataHeader = document.createElement('div')
                cardMainData.appendChild(dataHeader)
                dataHeader.classList.add('card-data-header')

                const createTittle = document.createElement('h3')
                dataHeader.appendChild(createTittle);
                createTittle.classList.add ('card-title')
                createTittle.textContent = e.title;

                const createDate = document.createElement('span')
                dataHeader.appendChild(createDate);
                createDate.classList.add ('card-anime-date')
                if(e.animeSeason.year == null){
                  createDate.textContent = 'Year : --'
                }else{
                  createDate.textContent = `Year : ${e.animeSeason.year}`
                }
                

                const createDescription = document.createElement('p')
                cardMainData.appendChild(createDescription)
                createDescription.classList.add ('card-description')
                createDescription.textContent = `Status : ${e.status}`
                const animeTags = document.createElement('span')
                cardMainData.appendChild(animeTags)
                animeTags.classList.add ('anime-tags')
                const tags = e.tags.join(',').split(',')
                if(tags.length > 1) {
                    animeTags.textContent = `${tags[0]}, ${tags[1]}`
                }else{
                    animeTags.textContent = `${tags[0]}`
                }
                

                const moreDescription = document.createElement('div')
                createStick.appendChild(moreDescription);
                moreDescription.classList.add ('card-more-description')

                const animeType = document.createElement('span')
                moreDescription.appendChild(animeType);
                animeType.classList.add ('anime-type')
                animeType.textContent = `Type: ${e.type}`
                const NumberOfEpisodes = document.createElement('span')
                moreDescription.appendChild(NumberOfEpisodes);
                NumberOfEpisodes.classList.add ('number-of-episodes')
                NumberOfEpisodes.textContent = `Eps: ${e.episodes}`
            });



        
      }
        
    const removeChild = (parent) => {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }