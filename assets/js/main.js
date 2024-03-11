function updateprofileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
    
}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')   
}

function updadateLanguages(profileData){
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updadatePortifolio(profileData){
    const portfolio = document.getElementById('profile.portifolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
        `
    }).join('')
}

function updateProfessionalExperience(profileData){
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
        return `
        <li>
            <h3 class="tittle">${experience.name}</h3>
            <div class="data">${experience.period}</div>
            <p>${experience.description}</p>
        </li>
        `
    }).join('')
}

function updateGitHub(profileData){
    const gitHub = document.getElementById('profile.gitHub')
    gitHub.innerHTML = profileData.github.map(git => `<a href="${git.link}">${git.name}</a>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateprofileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updadateLanguages(profileData)
    updadatePortifolio(profileData)
    updateProfessionalExperience(profileData)
    updateGitHub(profileData)
})()