export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 't-1',
    name: 'Priya M.',
    location: 'Bangalore',
    quote: 'The cotton fabric is incredibly soft and premium. I wore the office wear set for an all-day conference and felt extremely comfortable and put-together throughout.',
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Ananya R.',
    location: 'Delhi',
    quote: 'Beautiful floral print detailing! The co-ord set has a modern, relaxed fit that feels tailored but allows complete ease of movement. Perfect for Delhi summer days.',
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Meera K.',
    location: 'Mumbai',
    quote: 'Sattva Vogue has become my absolute go-to for everyday elegant fashion. The design aesthetic is minimalist and premium, without feeling overly decorative.',
    rating: 5,
  },
];
