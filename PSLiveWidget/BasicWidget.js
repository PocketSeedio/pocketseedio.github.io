function loadWidget(companyId) {
    document.addEventListener("DOMContentLoaded", function() {


        const url = 'https://pocketseed.github.io/PSLiveWidget/PSImpactData.json';
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

            const anchor = document.createElement('a');
            anchor.href = 'https://www.google.com';  // Set the URL where you want users to be directed when they click the widget.
            anchor.style.textDecoration = 'none'; // Removes underline from all text within the anchor.
            anchor.target = '_blank';  // Opens the link in a new tab.
            anchor.style.display = 'block'; /* Makes the anchor fill the entire container */
            anchor.style.width = '100%';   /* Ensures it spans the full width of its container */
            anchor.style.height = '100%';  /* Ensures it spans the full height of its container */
            
            const contentWrapper = document.createElement('div');
            contentWrapper.className = 'contentWrapper';
            contentWrapper.style = 'background-color: red';

            const imgContainer = document.createElement('div');
            imgContainer.className = 'imgContainer';

            const textContainer = document.createElement('div');
            textContainer.className = 'textContainer';

            const title = document.createElement('h2');
            title.textContent = companyData.widgetData.title;
            title.className = 'title';

            const content = document.createElement('p');
            content.textContent = companyData.widgetData.content;

            const info = document.createElement('p');
            info.textContent = companyData.widgetData.info;

            const img = document.createElement('img');
            img.src = 'https://pocketseed.github.io/PSLiveWidget/PSverified.png'; 
            img.alt = 'Descriptive text';

            // assemble the widget
           widget.appendChild(anchor);
           anchor.appendChild(contentWrapper)
           contentWrapper.appendChild(imgContainer);
           contentWrapper.appendChild(textContainer);
            imgContainer.appendChild(img);
            textContainer.appendChild(title);
            textContainer.appendChild(content);
            textContainer.appendChild(info);
            
            

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
