const e = document.getElementById("rect");

        e.style.width = "500px";
        e.style.height = "300px";
        
        const imgLinks = [
            'https://universetoday.ru/wp-content/uploads/2018/10/Mercury.jpg',
            'https://naukatv.ru/upload/files/shutterstock_418733752.jpg',
            'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2018-12/20180913_zaa_p138_057.jpg',
            'https://nnst1.gismeteo.ru/images/2020/07/shutterstock_1450308851-640x360.jpg',
            'https://new-science.ru/wp-content/uploads/2020/03/4848-4.jpg'
        ];
        
        let currentIndex = 0;
        setInterval(function() {
            document.getElementById('image').src = imgLinks[currentIndex];
            currentIndex++;
            if(currentIndex >= imgLinks.length) {
                currentIndex = 0;
            }
        }, 3000);