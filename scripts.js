function copyDiscordTag() {
    // The Discord tag you want to copy
    const discordTag = "eboK24LA#5766"; // Replace with your actual Discord tag

    // Copy the tag to the clipboard
    navigator.clipboard.writeText(discordTag).then(function() {
        // Show the "Copied tag!" notification
        const notification = document.getElementById("copy-notification");
        notification.classList.add("show");

        // Hide the notification after 2 seconds
        setTimeout(function() {
            notification.classList.remove("show");
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}
