function loadWidget(companyId, targetElementId) {
    document.addEventListener("DOMContentLoaded", function() {
        // Step 1: Dynamically load the Google Font
        const fontLink = document.createElement('link');
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap';
        fontLink.rel = 'stylesheet';
        document.head.appendChild(fontLink);

        const url = 'https://pocketseedio.github.io/PSLiveWidget/PSImpactData.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const companyData = data.companies.find(company => company.id === companyId);
                if (!companyData) {
                    console.error('Company data not found');
                    return;
                }

                const widget = document.createElement('div');
                widget.className = 'widget';
                widget.style.display = 'inline-block';
                widget.style.padding = '16px';
                widget.style.margin = '0 auto';
                widget.style.fontFamily = 'Epilogue, sans-serif';
                widget.style.background = '#FFF';
                widget.style.boxShadow = '0px 4px 16.4px 0px rgba(0, 0, 0, 0.10)';
                widget.style.borderRadius = '24px';

                const anchor = document.createElement('a');
                anchor.href = companyData.widgetData.URL;
                anchor.style.textDecoration = 'none';
                anchor.target = '_blank';

                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'contentWrapper';

                const imgContainer = document.createElement('div');
                imgContainer.className = 'imgContainer';

                const textContainer = document.createElement('div');
                textContainer.className = 'textContainer';

                const BusinessName = document.createElement('p');
                BusinessName.textContent = companyData.widgetData.BusinessName;
                BusinessName.className = 'BusinessName';
                BusinessName.style.color = '#000';
                BusinessName.style.fontSize = '24px';

                const TotalDollar = document.createElement('p');
                TotalDollar.style.color = '#000';
                TotalDollar.textContent = "🌏 " + companyData.widgetData.TotalDollar + " contributed.";

                const TotalKelp = document.createElement('p');
                TotalKelp.style.color = '#000';
                TotalKelp.textContent = "🪸 " + companyData.widgetData.TotalKelp + " Kelp planted.";

                const TotalCO2 = document.createElement('p');
                TotalCO2.style.color = '#000';
                TotalCO2.textContent = "☁️ " + companyData.widgetData.TotalCO2 + " CO2 removed.";

                const img = document.createElement('img');
                img.src = 'https://pocketseedio.github.io/PSLiveWidget/images/PSVerified.png';
                img.alt = 'PocketSeed verified impact partner badge.';
                img.style.maxWidth = '200px';

                // Assemble the widget
                widget.appendChild(anchor);
                anchor.appendChild(contentWrapper);
                contentWrapper.appendChild(imgContainer);
                contentWrapper.appendChild(textContainer);
                imgContainer.appendChild(img);
                textContainer.appendChild(TotalDollar);
                textContainer.appendChild(TotalKelp);
                textContainer.appendChild(TotalCO2);

                // Add entire widget to specified target element
                const targetElement = document.getElementById(targetElementId);
                if (targetElement) {
                    targetElement.appendChild(widget);
                } else {
                    console.error('Target element not found');
                }
            })
            .catch(error => console.error('Error loading the data:', error));
    });
}

function loadCSS(href) {
    const link = document.createElement('link');
    link.href = href;
    link.type = 'text/css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}
