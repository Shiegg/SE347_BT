function changeContent(section) {
    const textContent = document.getElementById("textContent");

    if (section === "ourStory") {
        textContent.innerHTML = `
            <p><span style="font-size: 32px;">Our Story</span></p>
            <p> What is the one philosophy that drives SCAAL? We believe that no matter where you go, you should always be able to enjoy the simple pleasure of a good cup of coffee in a comfortable environment. At home, reading the morning paper. At your local SCAAL, conversing with a confidant. Or perhaps in some foreign land, SCAAL will be greeting you like an old friend. After all, coffee is a ritual that transcends all cultural boundaries. It makes us feel alert, energetic and alive.</p>
            <p><span style="font-size: 32px;">Where we began</span></p>
            <p>Anders Carlson lived a sheltered life in a small fishing village in Marstrand, Sweden. As a child, he listened to stories of his grandfather Oluf s adventures and expeditions. Often his grandfather would bring back exotic coffees for the family to enjoy.</p>
        `;
    } else if (section === "products") {
        textContent.innerHTML = `
            <p><span style="font-size: 32px;">What makes SCAAL the best coffee?</span></p>
            <p> Anders has passed down the knowledge he learned as an apprentice in the coffee fields to every buyer, roaster, and franchise owner. SCAAL's standards for coffee are never compromised. We only select SHB   strictly hard bean or strictly high grown   coffee beans. To ensure their flavorful oils are preserved, extraordinary steps are taken to protect the coffee bean from heat, light, air and moisture.</p>
            <p>Upon his graduation Anders left home to see the world. He worked all kinds of odd jobs. He worked in Parisian cafes and Italian espresso bars. He worked in the coffee fields of Brazil and New Guinea. And in a few years, Anders learned the art of selecting the perfect coffee bean and roasting it to perfection.</p>
            <p>He returned home in 1980 to open the first SCAAL in Stockholm, Sweden. By creating his own unique blends of coffee and a stimulating atmosphere, SCAAL quickly became the place to gather   day or night   not only in Stockholm, Sweden, but 670 cities around the world.</p>
            `;
    } else if (section === "thisWeek") {
        textContent.innerHTML = `
            <p><span style="font-size: 32px;">All these efforts are made so that we may offer you a perfect cup of coffee.</span></p>
            <p>There are so many places you could go to buy coffee. We've gone to extraordinary efforts to ensure that SCAAL is your best choice. The quality begins at harvest. SCAAL relies on selective picking, a labor-intensive process that involves making several passes among the trees for those cherries that are perfectly ripe. Then we select top grade SHB, which stands for strictly hard bean or strictly high grown. Beans that are grown at a minimum altitude of 4,000 feet above sea level for optimum flavor. Within hours of shipping our coffee to you, the beans are roasted on-site in small batches by a Certified Roastmaster and vacuum-packed to retain its fresh taste and rich aroma.</p>
        `;
    }
}
