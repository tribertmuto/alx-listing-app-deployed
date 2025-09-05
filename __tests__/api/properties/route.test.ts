import { GET } from '../../../src/app/api/properties/route';

describe('GET /api/properties', () => {
  it('should return a list of properties', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('title');
    expect(data[0]).toHaveProperty('description');
    expect(data[0]).toHaveProperty('price');
    expect(data[0]).toHaveProperty('image');
  });
});
