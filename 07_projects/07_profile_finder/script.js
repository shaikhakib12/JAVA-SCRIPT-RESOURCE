const searchBtn = document.getElementById('search-btn');
const usernameInput = document.getElementById('username-input');
const profileCard = document.getElementById('profile-card');
const errorMsg = document.getElementById('error-msg')


searchBtn.addEventListener('click', fetchUserProfile);
usernameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchUserProfile();
        // console.log("enter ho rha ha!!");
        
    }
});

async function fetchUserProfile() {
    const username = usernameInput.value.trim();

    if (!username) {
        showError("Please enter valid username");
        return;
    }

    try {
        // Clear previous errors and hide card during fetch 
        errorMsg.style.display = 'none'

        const response = await fetch(`https://api.github.com/users/${username}`);
        console.log(`${username} succefully injected`);

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error(`${username} not found`);
            }else{
                throw new Error('Something went wrong. Try again.')
            }
        }

        const data = await response.json();
        updateProfileCard(data);
        
    } catch (error) {
        showError(error.message);
        profileCard.style.display = 'none'
    }
}
function updateProfileCard(user) {
    document.getElementById('avatar').src = user.avatar_url;
    document.getElementById('name').textContent = user.name || user.login;

    const usernameLink = document.getElementById('username-link');
    usernameLink.textContent = `@${user.login}`;
    usernameLink.href = user.html_url;

    document.getElementById('bio').textContent = user.bio;
    document.getElementById('repos').textContent = user.public_repos;
    document.getElementById('followers').textContent = user.followers;
    document.getElementById('following').textContent = user.following;

    // Meta information fallbacks

    document.getElementById('location').textContent = user.location?  `📍 ${user.location}`: `📍 Location : Not Available`;
    document.getElementById('company').textContent = user.company?  `🏢 ${user.company}`: `🏢 Company : Not Available`;



    // Reveal the card
    profileCard.style.display = 'block';
}
function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.style.display = 'block';
}