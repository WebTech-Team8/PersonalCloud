function showBox(boxType : string, message : string) {
    const elementId = boxType === 'info' ? 'successBox' : 'errorBox';
    const notificationBox: HTMLElement = document.getElementById(elementId) as HTMLElement;
    notificationBox.getElementsByTagName('span')[0].textContent = message;
    notificationBox.style.display = 'block';
    notificationBox.style.opacity = '1';
    
    setTimeout(() => {
        fadeOut(notificationBox);
    }, 3500);
}

function fadeOut(element: HTMLElement) {
    element.style.opacity = '0';
    setTimeout(() => {
        element.style.display = 'none';
    }, 400);
}

const notificationsService = {
    showSuccess: (message: string) => {
        showBox('info', message);
    },
    showError: (errorMessage: string) => {
        showBox('error', errorMessage);
    }
}

export default notificationsService;