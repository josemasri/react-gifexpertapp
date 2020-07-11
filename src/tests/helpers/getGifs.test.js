import { getGifs } from "../../helpers/getGifs";
import "@testing-library/jest-dom";

describe("Pruebas con getGifs", () => {
  test("debe de traer los elementos", async () => {
    const gifs = await getGifs("Game of thrones");
    expect(gifs.length).toBe(20);
  });
  test("debe de traer los elementos", async () => {
    const gifs = await getGifs("");
    console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
