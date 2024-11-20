export const copyResult = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard');
    });
};
