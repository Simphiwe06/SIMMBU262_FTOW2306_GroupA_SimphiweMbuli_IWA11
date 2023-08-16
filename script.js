// Get references to all elements
const orders = document.querySelectorAll('dl');

orders.forEach(order => {
    const biscuits = order.querySelector('.biscuits .count');
    const donuts = order.querySelector('.donuts .count');
    const pancakes = order.querySelector('.pancakes .count');
    const status = order.querySelector('.status dd');

    // Get data attributes
    const key = order.getAttribute('data-key');
    const biscuitsCount = order.getAttribute('data-biscuits');
    const donutsCount = order.getAttribute('data-donuts');
    const pancakesCount = order.getAttribute('data-pancakes');
    const delivered = order.getAttribute('data-delivered') === 'true';

    // Set values
    biscuits.textContent = biscuitsCount;
    donuts.textContent = donutsCount;
    pancakes.textContent = pancakesCount;
    status.textContent = delivered ? 'Delivered' : 'Pending';
});
