export const CAROUSEL_RESPONSIVE_CONFIG = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const CARD_WIDTH = '200px';

export const mockOrderData = [
  {
    title: 'Peterson Normil',
    date: 'March 7, 2024',
    text: 'Extra spicy jerk chicken bowl with plantains.',
  },
  {
    title: 'Abigail Daisy',
    date: 'February 22, 2024',
    text: 'Vegan lentil stew with quinoa and citrus salad.',
  },
  {
    title: 'Peter Parker',
    date: 'January 15, 2024',
    text: 'Web-slinger special: High-protein meatball sub.',
  },
  {
    title: 'PN',
    date: 'March 1, 2024',
    text: 'Breakfast burrito with avocado and turkey bacon.',
  },
  {
    title: 'KW',
    date: 'December 19, 2023',
    text: 'Korean BBQ rice bowl with kimchi slaw.',
  },
  {
    title: 'NS',
    date: 'March 9, 2024',
    text: 'Classic Caesar salad with grilled shrimp.',
  },
  {
    title: 'BM',
    date: 'November 11, 2023',
    text: 'Buttermilk fried chicken sandwich with pickles.',
  },
];
