const wanted = {
    price: 1000000,
    floors: 4,
    area: 1200
}


const house1 = {
    price: 900000,
    floors: 4,
    area: 1400
}

const house2 = {
    price: 1200000,
    floors: 3,
    area: 600
}

const houses = [house1, house2];

// test("Checking house", () => {
//     //expect(house1).toMatchObject(wanted);
//     expect(house2).toMatchObject(wanted);
// })

test("Checking house", () => {
    houses.map(item => {
        expect(item.price).toBeLessThanOrEqual(wanted.price);
        expect(item.area).toBeGreaterThanOrEqual(wanted.area);
        expect(item.floors).toBeGreaterThanOrEqual(wanted.floors);
    })
});