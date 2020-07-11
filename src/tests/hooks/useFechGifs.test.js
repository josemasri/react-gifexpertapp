import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("game"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("game")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(20);
    expect(loading).toBeFalsy();
  });
});
