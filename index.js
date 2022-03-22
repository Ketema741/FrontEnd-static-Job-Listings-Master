fetch("./data.json")
    .then(function(resp) {
        return resp.json()
    })
    .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                const client = document.getElementById("main").innerHTML +=
                    `
            <div class="client client--${i}" id=client >
                <div class = "client__description">
                    <span class = "client__name"> ${data[i].company} </span> 
                    <span class = "client__IsNew" style="border:none; display:${(data[i].new)? 'visible' : 'none'} ">new! </span> 
                    <span class = "client_IsFeatured" style="display:${(data[i].featured)? 'visible' : 'none'} ">featured</span> 
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