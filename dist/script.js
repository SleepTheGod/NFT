// Simulated NFT data (replace this with your actual data fetching logic)
const nfts = [
    {
        id: 1,
        imageURL: 'https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://bafybeidb7ltjitqivbcp22iktp5vmciee4dwzrjobwjnlzt5dkgyepj5ne.ipfs.nftstorage.link/',
        name: 'NFT Name 1',
        description: 'Description of the NFT 1',
        price: 0.1, // Price in ETH
    },
    {
        id: 2,
        imageURL: 'https://img-cdn.magiceden.dev/rs:fill:400:0:0/plain/https://bafybeidb7ltjitqivbcp22iktp5vmciee4dwzrjobwjnlzt5dkgyepj5ne.ipfs.nftstorage.link/',
        name: 'NFT Name 2',
        description: 'Description of the NFT 2',
        price: 0.05, // Price in ETH
    },
    // Add more NFTs as needed
];

// Function to display NFT cards
function displayNFTs() {
    const nftContainer = document.getElementById('nftGrid');

    nfts.forEach(nft => {
        const card = document.createElement('div');
        card.classList.add('nft-card');
        card.innerHTML = `
            <img src="${nft.imageURL}" alt="NFT Image">
            <h3>${nft.name}</h3>
            <p>${nft.description}</p>
            <p class="price">Price: ${nft.price} ETH</p>
            <button class="purchase-btn">Purchase with Bitcoin</button>
            <button class="view-details-btn">View Details</button>
        `;
        nftContainer.appendChild(card);
    });

    handleButtons();
}

// Function to handle button clicks
function handleButtons() {
    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    purchaseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nftName = button.parentNode.querySelector('h3').textContent;
            // Replace this with your purchase logic or redirect to your purchase link
            alert(`You purchased ${nftName}`);
        });
    });

    const detailsButtons = document.querySelectorAll('.view-details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById('detailsModal');
            const nftCard = button.parentNode;
            const nftName = nftCard.querySelector('h3').textContent;
            const nftDescription = nftCard.querySelector('p').textContent;
            const nftPrice = nftCard.querySelector('.price').textContent;

            const modalImage = modal.querySelector('img');
            const modalDescription = modal.querySelector('#modalDescription');
            const modalPrice = modal.querySelector('#modalPrice');

            modalImage.src = nftCard.querySelector('img').src;
            modalDescription.textContent = nftDescription;
            modalPrice.textContent = nftPrice;

            modal.style.display = 'block';
        });
    });
}

// Function to handle offer submission
function handleOfferSubmission() {
    const submitOfferBtn = document.getElementById('submitOfferBtn');
    submitOfferBtn.addEventListener('click', () => {
        const offerAmount = document.getElementById('offerAmount').value;
        // Handle the offer submission logic here (e.g., send to backend, update UI, etc.)
        alert(`Offer submitted: ${offerAmount} BTC`);
    });
}

// Close modal when the close button is clicked
const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener('click', () => {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'none';
});

// Display NFTs when the page loads
window.onload = () => {
    displayNFTs();
    handleOfferSubmission();
};