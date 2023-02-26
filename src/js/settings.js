import { toggleElements } from './toggleElements';

const settingsBtn = document.querySelector('.settings-btn');
const settings = document.querySelector('.settings-popup');

const showSettingsPopup = () => {
    toggleElements();
    settingsBtn.addEventListener('click', () => {
        settingsBtn.classList.toggle('active');
        settings.classList.toggle('active');
    });
    document.addEventListener('click', (event) => {
        if (!event.composedPath().includes(settingsBtn) && !event.composedPath().includes(settings)) {
            settingsBtn.classList.remove('active');
            settings.classList.remove('active');
        }
    });
};

export { showSettingsPopup };
