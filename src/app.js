document.addEventListener('DOMContentLoaded', () => {
    const nfts = [
        // Sample NFT data
        {
            id: 1,
            title: 'Ordinal #001',
            description: 'This is an amazing Bitcoin Ordinal inscription.',
            price: '0.5 BTC',
            image: 'nft-image-url-1.jpg'
        },
        {
            id: 2,
            title: 'Ordinal #002',
            description: 'Another unique piece of digital art on Bitcoin.',
            price: '0.3 BTC',
            image: 'nft-image-url-2.jpg'
        }
    ];

    const nftGrid = document.getElementById('nftGrid');
    nfts.forEach(nft => {
        const nftCard = document.createElement('div');
        nftCard.classList.add('nft-card');
        nftCard.innerHTML = `
            <img src="${nft.image}" alt="${nft.title}">
            <h3>${nft.title}</h3>
            <p>${nft.description}</p>
            <p class="price">${nft.price}</p>
            <button class="view-details-btn">View Details</button>
        `;
        nftGrid.appendChild(nftCard);
    });

    const modal = document.getElementById('nftModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalPrice = modal.querySelector('.modal-price');
    nftGrid.addEventListener('click', event => {
        if (event.target.classList.contains('view-details-btn')) {
            const card = event.target.closest('.nft-card');
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            const price = card.querySelector('.price').textContent;
            modalImage.src = imgSrc;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalPrice.textContent = price;
            modal.style.display = 'block';
        }
    });

    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
