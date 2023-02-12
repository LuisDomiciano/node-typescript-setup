import Dog from "."

it("should return 8", () => {
  expect(2 * 4).toBe(8)
})

it("should return 6", () => {
  expect(2 * 3).toBe(6)
})

it("should return 'Auau'", () => {
  const dog = new Dog()
  expect(dog.bark()).toBe("Auau")
})
