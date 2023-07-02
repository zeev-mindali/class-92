const houseForSale = {
    bath: true,
    bedroom: 5,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        area: 20,
        wallColor: 'yellow',
    },
};

const desiredHouse = {
    bath: true,
    kitchen: {
        amenities: ['oven', 'stove', 'washer'],
        wallColor: expect.stringMatching(/black|yellow/),
    },
}

test('the house that i looking for', () => {
    expect(houseForSale).toMatchObject(desiredHouse);
})