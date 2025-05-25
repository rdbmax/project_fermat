import { expect, test } from 'vitest'
import { shuffledArray, getRandomFrom0to100, getRandomDigit } from '../src/helpers.ts'

test('shuffledArray', () => {
  const shuffledArrayReturn = shuffledArray([1, 2, 3, 4, 5])

  expect(shuffledArrayReturn.length).toBe(5)
  expect(shuffledArrayReturn.includes(1)).toBe(true)
  expect(shuffledArrayReturn.includes(2)).toBe(true)
  expect(shuffledArrayReturn.includes(3)).toBe(true)
  expect(shuffledArrayReturn.includes(4)).toBe(true)
  expect(shuffledArrayReturn.includes(5)).toBe(true)
})

test('getRandomFrom0to100', () => {
  expect(getRandomFrom0to100() <= 100).toBe(true)
  expect(getRandomFrom0to100() <= 100).toBe(true)
  expect(getRandomFrom0to100() <= 100).toBe(true)
  expect(getRandomFrom0to100() <= 100).toBe(true)
  expect(getRandomFrom0to100() <= 100).toBe(true)
})

test('getRandomDigit', () => {
  expect(getRandomDigit() >= 0 && getRandomDigit() <= 9).toBe(true)
  expect(getRandomDigit() >= 0 && getRandomDigit() <= 9).toBe(true)
  expect(getRandomDigit() >= 0 && getRandomDigit() <= 9).toBe(true)
  expect(getRandomDigit() >= 0 && getRandomDigit() <= 9).toBe(true)
  expect(getRandomDigit() >= 0 && getRandomDigit() <= 9).toBe(true)
})
