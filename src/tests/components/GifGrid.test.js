import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFechGifs";
jest.mock("../../hooks/useFechGifs");

describe("Pruebas para GifGrid", () => {
  useFetchGifs.mockReturnValue({
    data: [],
    loading: true,
  });
  const category = "game";

  test("debe de mostrarse correctamente", () => {
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://localhost/cualquier/cosa.gif",
        title: "Cualquier cosa",
      },
      {
        id: "DEF",
        url: "https://localhost/cualquier/cosa.gif",
        title: "Cualquier cosa",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
