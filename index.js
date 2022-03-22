function isNew(data) {
    if (data) { return 'visible' } else return 'none'
}

function isFeatured(data) {
    if (data) { return 'visible' } else return 'none'
}
fetch("./data.json")
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                const client = document.getElementById("main").innerHTML +=
                    `
            <div class="client client--1" id=client>
                <div class = "client__description">
                    <span class = "client__name"> ${data[i].company} </span> 
                    <span class = "client__IsNew" style="display:${isNew(data[i].new)} ">new! </span> 
                    <span class = "client_IsFeatured" style="display:${isFeatured(data[i].featured)} ">featured</span> 
                    </div>
                    <img src="${data[i].logo}" alt="" class="client__image" id='logo'>
                    <h1 class="client__header" id="header"> ${data[i].position}</h1>
                    <div class="client__info">
                        <ul class="client__work">
                            <li class="client__time">${data[i].postedAt}</li>
                            <li class="client__workType">${data[i].contract}</li>
                            <li class="client__workPlace">${data[i].location}</li>
                        </ul>
                    </div>
                    <div class="divider"></div>
                    <div class="client__experience">
                    <span class="client__skill">${data[i].role}</span>
                    <span class="client__skill">${data[i].level}</span>
                    ${data[i].languages.map(language=>`<span class="client__skill">${language}</span>`).join("")}
                    ${data[i].tools.map(tool=>`<span class="client__skill">${tool}</span>`).join("")}
                    </div> 
                </div>
                `
        }
    })