function loadWidget(companyId) {
    document.addEventListener("DOMContentLoaded", function() {

                // Step 1: Dynamically load the Google Font
                const fontLink = document.createElement('link');
                fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
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
            widget.style.fontFamily = 'Roboto, sans-serif'; // Changed from Arial to Roboto
            
            const anchor = document.createElement('a');
            anchor.href = companyData.widgetData.URL;  // Set the URL where you want users to be directed when they click the widget.
            anchor.style.textDecoration = 'none'; // Removes underline from all text within the anchor.
            anchor.target = '_blank';  // Opens the link in a new tab.
            anchor.style.display = 'block'; /* Makes the anchor fill the entire container */
            anchor.style.width = '100%';   /* Ensures it spans the full width of its container */
            anchor.style.height = '100%';  /* Ensures it spans the full height of its container */
            
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'contentWrapper';
            

            const imgContainer = document.createElement('div');
            imgContainer.className = 'imgContainer';

            const textContainer = document.createElement('div');
            textContainer.className = 'textContainer';

            const BusinessName = document.createElement('h2');
            BusinessName.textContent = companyData.widgetData.BusinessName;
            BusinessName.className = 'BusinessName';
            BusinessName.style.color = '#f00'

            const TotalDollar = document.createElement('p');
            TotalDollar.textContent = companyData.widgetData.TotalDollar;

            TotalDollar.textContent += " contributed.";


            const TotalKelp = document.createElement('p');
            TotalKelp.textContent = companyData.widgetData.TotalKelp;

            const TotalCO2 = document.createElement('p');
            TotalCO2.textContent = companyData.widgetData.TotalCO2;

            const img = document.createElement('img');
            img.src = 'https://pocketseedio.github.io/PSLiveWidget/PSVerified.png'; 
            img.alt = 'Descriptive text';
            img.style.maxWidth = '150px';

            // assemble the widget
           widget.appendChild(anchor);
           anchor.appendChild(contentWrapper)
           contentWrapper.appendChild(imgContainer);
           contentWrapper.appendChild(textContainer);
            imgContainer.appendChild(img);
            textContainer.appendChild(BusinessName);
            textContainer.appendChild(TotalDollar);
            textContainer.appendChild(TotalKelp);
            textContainer.appendChild(TotalCO2);
            
            

            //Add entire widget to page
            document.body.appendChild(widget);
            
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
