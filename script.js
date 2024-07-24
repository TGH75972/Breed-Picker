const breedDetails = {
    'labrador': {
        name: 'Labrador Retriever',
        description: 'Friendly, outgoing, and high-spirited companions.',
        lifespan: '10-12 years',
        food: 'High-quality dry food, including chicken or fish-based formulas.',
        loyalty: 'Very high. Labradors are known for their loyalty and affection.',
        weight: '55-80 lbs',
        img: 'images/labrador.jpg'
    },
    'german_shepherd': {
        name: 'German Shepherd',
        description: 'Loyal, confident, and courageous.',
        lifespan: '9-13 years',
        food: 'High-protein kibble or raw diet. Look for formulas that support muscle maintenance.',
        loyalty: 'Extremely high. German Shepherds are known for their protective and devoted nature.',
        weight: '50-90 lbs',
        img: 'images/german_shepherd.jpg'
    },
    'golden_retriever': {
        name: 'Golden Retriever',
        description: 'Intelligent, friendly, and devoted.',
        lifespan: '10-12 years',
        food: 'High-quality dry food, including chicken or lamb-based formulas.',
        loyalty: 'Very high. Golden Retrievers are known for their friendly and affectionate nature.',
        weight: '55-75 lbs',
        img: 'images/golden_retriever.jpg'
    },
    'bulldog': {
        name: 'Bulldog',
        description: 'Docile, willful, and friendly.',
        lifespan: '8-10 years',
        food: 'High-quality kibble designed for bulldogs.',
        loyalty: 'High. Bulldogs are known for their loving and courageous nature.',
        weight: '40-50 lbs',
        img: 'images/bulldog.jpg'
    },
    'beagle': {
        name: 'Beagle',
        description: 'Curious, friendly, and merry.',
        lifespan: '12-15 years',
        food: 'High-quality dry food with meat as the first ingredient.',
        loyalty: 'High. Beagles are known for their affectionate and friendly nature.',
        weight: '20-30 lbs',
        img: 'images/beagle.jpg'
    },
    'poodle': {
        name: 'Poodle',
        description: 'Active, proud, and very smart.',
        lifespan: '12-15 years',
        food: 'High-quality kibble or raw diet.',
        loyalty: 'Very high. Poodles are known for their intelligence and affection.',
        weight: '4-70 lbs',
        img: 'images/poodle.jpg'
    },
    'rottweiler': {
        name: 'Rottweiler',
        description: 'Confident, fearless, and good-natured.',
        lifespan: '8-10 years',
        food: 'High-protein dog food with meat as the main ingredient.',
        loyalty: 'Extremely high. Rottweilers are known for their protective nature and loyalty.',
        weight: '80-135 lbs',
        img: 'images/rottweiler.jpg'
    },
    'yorkshire_terrier': {
        name: 'Yorkshire Terrier',
        description: 'Affectionate, brave, and intelligent.',
        lifespan: '12-15 years',
        food: 'High-quality kibble for small breeds.',
        loyalty: 'High. Yorkshire Terriers are known for their spirited and loving nature.',
        weight: '4-7 lbs',
        img: 'images/yorkshire_terrier.jpg'
    },
    'boxer': {
        name: 'Boxer',
        description: 'Energetic, playful, and loyal.',
        lifespan: '10-12 years',
        food: 'High-quality kibble designed for active breeds.',
        loyalty: 'Very high. Boxers are known for their playful and loyal nature.',
        weight: '50-80 lbs',
        img: 'images/boxer.jpg'
    },
    'dachshund': {
        name: 'Dachshund',
        description: 'Curious, lively, and brave.',
        lifespan: '12-16 years',
        food: 'High-quality dry food for small breeds.',
        loyalty: 'High. Dachshunds are known for their bold and loving personality.',
        weight: '11-32 lbs',
        img: 'images/dachshund.jpg'
    },
    'siberian_husky': {
        name: 'Siberian Husky',
        description: 'Friendly, alert, and outgoing.',
        lifespan: '12-15 years',
        food: 'High-quality dog food suitable for active breeds.',
        loyalty: 'High. Siberian Huskies are known for their friendly and outgoing nature.',
        weight: '35-60 lbs',
        img: 'images/siberian_husky.jpg'
    },
    'great_dane': {
        name: 'Great Dane',
        description: 'Gentle, friendly, and intelligent.',
        lifespan: '7-10 years',
        food: 'High-quality kibble with essential nutrients for large breeds.',
        loyalty: 'Very high. Great Danes are known for their affectionate and protective nature.',
        weight: '110-175 lbs',
        img: 'images/great_dane.jpg'
    },
    'shih_tzu': {
        name: 'Shih Tzu',
        description: 'Affectionate, friendly, and alert.',
        lifespan: '10-16 years',
        food: 'High-quality food suitable for small breeds.',
        loyalty: 'High. Shih Tzus are known for their loving and friendly nature.',
        weight: '9-16 lbs',
        img: 'images/shih_tzu.jpg'
    },
    'chihuahua': {
        name: 'Chihuahua',
        description: 'Lively, alert, and courageous.',
        lifespan: '12-20 years',
        food: 'High-quality kibble for small breeds.',
        loyalty: 'High. Chihuahuas are known for their vibrant and loyal nature.',
        weight: '2-6 lbs',
        img: 'images/chihuahua.jpg'
    },
    'pomeranian': {
        name: 'Pomeranian',
        description: 'Playful, lively, and intelligent.',
        lifespan: '12-16 years',
        food: 'High-quality dry food for small breeds.',
        loyalty: 'Very high. Pomeranians are known for their affectionate and spirited nature.',
        weight: '3-7 lbs',
        img: 'images/pomeranian.jpg'
    },
    'border_collie': {
        name: 'Border Collie',
        description: 'Energetic, intelligent, and hardworking.',
        lifespan: '12-15 years',
        food: 'High-protein dog food suitable for active breeds.',
        loyalty: 'Very high. Border Collies are known for their intelligence and dedication.',
        weight: '30-45 lbs',
        img: 'images/border_collie.jpg'
    },
    'basset_hound': {
        name: 'Basset Hound',
        description: 'Gentle, friendly, and laid-back.',
        lifespan: '10-12 years',
        food: 'High-quality kibble with meat as the main ingredient.',
        loyalty: 'High. Basset Hounds are known for their affectionate and loyal nature.',
        weight: '40-65 lbs',
        img: 'images/basset_hound.jpg'
    },
    'cocker_spaniel': {
        name: 'Cocker Spaniel',
        description: 'Gentle, affectionate, and intelligent.',
        lifespan: '12-15 years',
        food: 'High-quality kibble suitable for medium-sized breeds.',
        loyalty: 'Very high. Cocker Spaniels are known for their loving and friendly nature.',
        weight: '24-30 lbs',
        img: 'images/cocker_spaniel.jpg'
    },
    'doberman': {
        name: 'Dobermann Pinscher',
        description: 'Confident, fearless, and loyal.',
        lifespan: '10-12 years',
        food: 'High-protein dog food with essential nutrients.',
        loyalty: 'Extremely high. Dobermanns are known for their loyalty and protective nature.',
        weight: '60-100 lbs',
        img: 'images/doberman.jpg'
    },
    'pug': {
        name: 'Pug',
        description: 'Charming, mischievous, and loving.',
        lifespan: '12-15 years',
        food: 'High-quality kibble for small breeds.',
        loyalty: 'High. Pugs are known for their loving and playful nature.',
        weight: '14-18 lbs',
        img: 'images/pug.jpg'
    },
    'maltese': {
        name: 'Maltese',
        description: 'Gentle, playful, and affectionate.',
        lifespan: '12-15 years',
        food: 'High-quality food suitable for small breeds.',
        loyalty: 'Very high. Maltese are known for their affectionate and loving nature.',
        weight: '4-7 lbs',
        img: 'images/maltese.jpg'
    }
};

function pickBreed(breed, button) {
    const card = button.closest('.breed-card');
    const breedInfo = card.querySelector('.breed-info');
    
    document.querySelectorAll('.breed-info').forEach(info => info.style.display = 'none');
    document.querySelectorAll('.breed-card button').forEach(btn => btn.classList.remove('hidden'));
    
    if (breedDetails[breed]) {
        breedInfo.innerHTML = `
            <h1>${breedDetails[breed].name}</h1>
            <img src="${breedDetails[breed].img}" alt="${breedDetails[breed].name}">
            <p><strong>Description:</strong> ${breedDetails[breed].description}</p>
            <p><strong>Lifespan:</strong> ${breedDetails[breed].lifespan}</p>
            <p><strong>Food:</strong> ${breedDetails[breed].food}</p>
            <p><strong>Loyalty:</strong> ${breedDetails[breed].loyalty}</p>
            <p><strong>Weight:</strong> ${breedDetails[breed].weight}</p>
        `;
        breedInfo.style.display = 'block';
        button.classList.add('hidden');
    }
}
