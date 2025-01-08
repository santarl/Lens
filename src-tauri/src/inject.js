document.addEventListener('DOMContentLoaded', () => {
    const css = `
        body {
            background-color: transparent !important;
        }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);

    const selectors = [
        'body > div.L3eUgb > div.o3j99.n1xJcf.Ne6nSd',
        'body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ',
        'body > div.L3eUgb > div.o3j99.qarstb',
        'body > div.L3eUgb > div:nth-child(3) > div',
        'body > div.L3eUgb > div:nth-child(4)'
    ];

    selectors.forEach(selector => {
        try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                try {
                    element.remove();
                } catch (error) {
                    console.error(`Failed to remove element matching selector "${selector}":`, error);
                }
            });
        } catch (error) {
            console.error(`Error matching elements for selector "${selector}":`, error);
        }
    });
});
